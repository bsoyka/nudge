import { getAuth } from "firebase/auth";
import { db } from "./auth";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";

export const updateHabitStatus = async (habitId: string, newStatus: number) => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in")
    return 
  }

  try {
    // get user refrenece in db
    const habitRef = doc(db, "users", user.uid, "habits", habitId)

    // get the user's habit collection in the db

    // add habit to the user's habit collection
    await updateDoc(habitRef, {
      auditor: newStatus,
    });

    console.log(habitId, "habit status updated to:", newStatus)

  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}