import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./auth";
import { Friend } from "@/app/constants";

export const getFriendRequests = async (): Promise<Friend[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    let friendReqList: Friend[] = [];

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData: string[] = userSnap.data().friendRequests;

      for (const friendUid of userData) {
        const friendRef = doc(db, "users", friendUid);
        const friendSnap = await getDoc(friendRef);

        if (friendSnap.exists()) {
          const friendData = friendSnap.data();

          const friendItem: Friend = {
            uid: friendSnap.id,
            username: friendData.username,
            score: friendData.score,
            photo: friendData.photo ?? null,
          };

          friendReqList.push(friendItem);
        }
      }
    } else {
      throw new Error("user does not exist");
    }

    return friendReqList;
  } catch (error: any) {
    console.error(error.code, error.message);
  }
};
