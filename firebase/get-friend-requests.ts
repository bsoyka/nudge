"use client";

import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./auth";

export const getFriendRequests = async (): Promise<string[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data().friendRequests;
    } else {
      throw new Error("user does not exist");
    }
  } catch (error: any) {
    console.error(error.code, error.message);
  }
};
