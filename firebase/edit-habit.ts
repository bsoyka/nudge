import { getAuth } from "firebase/auth";
import { db } from "./auth";
import { addDoc, arrayRemove, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Habit } from "@/app/constants";


const getUserRef = () => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    return doc(db, "users", user.uid)
  } else {
    console.log("no user signed in")
    return null
  }
}

export const editHabitName = async (hid: string, newName: string) : Promise<void> => {
  try {
    // get user ref in db
    const userRef = getUserRef()
    if (!userRef) {
      throw new Error("user does not exist")
    }

    // get the user's habit in the db
    const habitRef = doc(userRef, "habits", hid)

    // update habit name
    const docRef = await updateDoc(habitRef, {
      habitName: newName
    });

    console.log("habit name updated to:", newName);

  } catch (error: any) {
    console.error("error updating habit name", error.code, error.message)
  }
}

export const incrementStreak = async (hid: string) : Promise<void> => {
  try {
    // get user ref in db
    const userRef = getUserRef()
    if (!userRef) {
      throw new Error("user does not exist")
    }

    let currentStreak = 0;

    // get the user's habit in the db
    const habitRef = doc(userRef, "habits", hid);
    const habitSnap = await getDoc(habitRef);

    if (habitSnap.exists()) {
      currentStreak = habitSnap.data().streak
    } else {
      throw new Error("habit does not exist")
    }

    // increment the streak
    const docRef = await updateDoc(habitRef, {
      streak: currentStreak + 1
    });

    console.log("habit streak incremented");

  } catch (error: any) {
    console.error("error updating habit streak", error.code, error.message)
  }
}

export const resetStreak = async (hid: string) : Promise<void> => {
  try {
    // get user ref in db
    const userRef = getUserRef()
    if (!userRef) {
      throw new Error("user does not exist")
    }

    // get the user's habit in the db
    const habitRef = doc(userRef, "habits", hid);

    // reset streak
    const docRef = await updateDoc(habitRef, {
      streak: 0
    });

    console.log("habit streak incremented");

  } catch (error: any) {
    console.error("error updating habit streak", error.code, error.message)
  }
}

export const updateHabitStatus = async (hid: string, newStatus: number) => {
  try {

    // get user ref in db
    const userRef = getUserRef()
    if (!userRef) {
      throw new Error("user does not exist")
    }

    // get user refrenece in db
    const habitRef = doc(userRef, "habits", hid);

    // add habit to the user's habit collection
    await updateDoc(habitRef, {
      status: newStatus,
    });

    const habitSnap = await getDoc(habitRef);

    if (habitSnap.exists()) {
      const auditorUid = habitSnap.data().auditor
      const auditorRef = doc(db, "users", auditorUid);
      
      // if the status becomes pending, add it to the auditor's pending list
      if (newStatus == 1) {

        await updateDoc(auditorRef, {
          pendingHabits: arrayUnion(hid)
        });
        
      // if the status becomes complete, remove it from the auditor's pending list
      } else if (newStatus == 2) {

        await updateDoc(auditorRef, {
          pendingHabits: arrayRemove(hid)
        })

      }

    } else {
      throw new Error("auditor does not exist")
    }

    console.log(hid, "habit status updated to:", newStatus)

  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}