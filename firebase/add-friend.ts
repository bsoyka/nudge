"use client";

import { getAuth, User } from "firebase/auth";
import { db } from "./auth";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

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

    // check if friend to be added exists
    const friendRef = doc(db, "users", friendUid);
    const friendSnap = await getDoc(friendRef);

    if (!friendSnap.exists()) {
      throw new Error("user requested doesnt exist");
    }

    const userRef = doc(db, "users", user.uid);

    // check if friend is already added
    const q = query(
      collection(userRef, "friends"),
      where("friends", "array-contains", friendUid),
    );
    const snap = await getDocs(q);

    if (!snap.empty) {
      throw new Error("friend already added");
    }

    // add friend to list
    await updateDoc(userRef, {
      friends: arrayUnion(friendUid),
    });

    console.log(`${user.displayName} added ${friendUid}`);
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message);
  }
};
