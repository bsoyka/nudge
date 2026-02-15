"use client";

import { getAuth } from "firebase/auth";
import { db } from "./auth";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const updateHabitStatus = async (hid: string, newStatus: number) => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    // get user refrenece in db
    const habitRef = doc(db, "users", user.uid, "habits", hid);

    // add habit to the user's habit collection
    await updateDoc(habitRef, {
      status: newStatus,
    });

    const habitSnap = await getDoc(habitRef);

    if (habitSnap.exists()) {
      const auditorUid = habitSnap.data().auditor;
      const auditorRef = doc(db, "users", auditorUid);

      // if the status becomes pending, add it to the auditor's pending list
      if (newStatus == 1) {
        await updateDoc(auditorRef, {
          pendingHabits: arrayUnion(hid),
        });

        // if the status becomes complete, remove it from the auditor's pending list
      } else if (newStatus == 2) {
        await updateDoc(auditorRef, {
          pendingHabits: arrayRemove(hid),
        });
      }
    } else {
      throw new Error("auditor does not exist");
    }

    console.log(hid, "habit status updated to:", newStatus);
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message);
  }
};
