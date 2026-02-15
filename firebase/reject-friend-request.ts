import { getAuth } from "firebase/auth";
import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import { db } from "./auth";

export const rejectFriendRequest = async (
  rejectedUid: string,
): Promise<void> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      friendRequests: arrayRemove(rejectedUid),
    });
  } catch (error: any) {
    console.error(error.code, error.message);
  }
};
