import { getAuth } from "firebase/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "./auth";

export const makeFriendRequest = async (friendUid: string) => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    if (user.uid == friendUid) {
      throw new Error("can't friend yourself");
    }

    const friendRef = doc(db, "users", friendUid);

    await updateDoc(friendRef, {
      friendRequests: arrayUnion(user.uid),
    });

    console.log("friend req sent to", friendUid);
  } catch (error: any) {
    console.error("error making friend request", error.code, error.message);
  }
};
