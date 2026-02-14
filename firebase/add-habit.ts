import { getAuth } from "firebase/auth";
import { db } from "./auth";
import { doc, setDoc } from "firebase/firestore";

export const addHabit = async (habitName: string) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in")
    return 
  }

  try {
    await setDoc(doc(db, "habits", "LA"), {
      habitName: "Los Angeles",
      state: "CA",
      country: "USA"
    });


    console.log(`welcome ${user.displayName}`)
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}