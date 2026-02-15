import { doc, getDoc } from "firebase/firestore";
import { db } from "./auth";

export const getUsername = async (uid: string): Promise<string | undefined> => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      throw new Error("user does not exist");
    }

    return userSnap.data().username;
  } catch (error: any) {
    console.error(error.code, error.messege);
  }
};
