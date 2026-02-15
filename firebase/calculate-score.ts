import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./auth";

export const calculateScore = async (uid: string) => {
  try {
    const habitRef = collection(db, "users", uid, "habits");
    const habitSnap = await getDocs(habitRef);

    const count = habitSnap.size

    const userRef = doc(db, "users", uid)

    await updateDoc(userRef, {
      score: count
    })

    console.log("score updated for user:", uid)
  } catch (error:any) {
    console.error(error.code, error.message)
  }
}