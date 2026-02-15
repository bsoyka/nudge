import { getAuth } from "firebase/auth";
import { db } from "./auth";
import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { UserSquare2 } from "lucide-react";

export const addFriend = async (friendUid: string) => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    // check if friend and user if the same
    if (user.uid == friendUid) {
      throw new Error("can't add yourself as friend");
    }

    const friendRef = doc(db, "users", friendUid);
    const friendSnap = await getDoc(friendRef);

    if (!friendSnap.exists()) {
      throw new Error("friend requested doesnt exist");
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    /**
     * add friend to user's friends list
     */
    const userQ = query(
      collection(userRef, "friends"),
      where("friends", "array-contains", friendUid),
    );

    const userQuerySnap = await getDocs(userQ);

    if (userQuerySnap.empty) {
      await updateDoc(userRef, {
        friends: arrayUnion(friendUid),
      });
    }

    await updateDoc(userRef, {
      friendRequests: arrayRemove(friendUid),
    });

    /**
     * add user to friend's friends list
     */
    const friendQ = query(
      collection(friendRef, "friends"),
      where("friends", "array-contains", user.uid),
    );

    const friendQuerySnap = await getDocs(friendQ);

    if (friendQuerySnap.empty) {
      await updateDoc(friendRef, {
        friends: arrayUnion(user.uid),
      });
    }

    await updateDoc(friendRef, {
      friendRequests: arrayRemove(user.uid),
    });

    console.log(`${user.displayName} added ${friendUid}`);
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message);
  }
};
