"use client";

import { getAuth } from "firebase/auth";
import { db } from "./auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";

export const addHabit = async (
  habitName: string,
): Promise<string | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    // get user refrenece in db
    const userRef = doc(db, "users", user.uid);

    // get the user's habit collection in the db
    const habitRef = collection(userRef, "habits");

    // add habit to the user's habit collection
    const docRef = await addDoc(habitRef, {
      hid: "",
      habitName: habitName,
      streak: 0,
      viewers: [],
      auditor: null,
      status: 0,
      owner: user.uid,
    });

    // add hid to the habit
    await updateDoc(docRef, {
      hid: docRef.id,
    });

    console.log("habit created:", habitName);

    // return hid
    return docRef.id;
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message);
  }
};
