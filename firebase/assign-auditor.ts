import { getAuth, User } from "firebase/auth";
import { db } from "./auth";
import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

export const assignAuditor = async (habitId: string, auditorUid: string) => {

  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in")
    return 
  }

  try {
    // check if auditor and user if the same
    if (user.uid == auditorUid) {
      throw new Error("can't add yourself as friend")
    }

    // check if auditor to be added exists
    const auditorRef = doc(db, "users", auditorUid);
    const auditorSnap = await getDoc(auditorRef);

    if (!auditorSnap.exists()) {
      throw new Error("user requested doesnt exist");
    }

    // console.log("users", user.uid, "habit", )
    const habitRef = doc(db, "users", user.uid, "habits", habitId);

    // check if an auditor is assigned already
    // const q = query(collection(habitRef, "auditor"));
    // const snap = await getDocs(q);

    // if (!snap.empty) {
    //   throw new Error("auditor already assigned")
    // }

    // add friend to list
    await updateDoc(habitRef, {
      auditor: auditorUid
    });

    console.log(`${user.displayName} added ${auditorUid} as auditor`)

  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}