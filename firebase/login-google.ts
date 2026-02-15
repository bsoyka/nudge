"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "./auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  try {
    // attempt to sign in with google OAuth
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // get reference to the user in the db
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef);

    // if the user is not added to the db, add them to the db
    if (!snap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        username: user.displayName,
        usernameLower: user.displayName?.toLowerCase(),
        photo: user.photoURL,
        score: 0,
        friends: [],
        pendingHabits: [],
        friendRequests: [],
      });
    }

    console.log(`welcome ${user.displayName}`);
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message);
  }
};
