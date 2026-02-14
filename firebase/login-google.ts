import { signInWithPopup } from "firebase/auth"
import { auth, db, googleProvider } from "./auth"
import { doc, getDoc, setDoc } from "firebase/firestore";

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user

    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef)

    if (!snap.exists()) {
      await setDoc(userRef, {
        username: user.displayName,
        streak: 0,
        friends: []
      });
    }

    console.log(`welcome ${user.displayName}`)
  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}