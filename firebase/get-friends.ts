import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./auth";

type Friend = {
  uid: string,
  username: string
  score: number
}

export const getFriends = async () : Promise<Friend[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    throw new Error("no user signed in")
  }

  try {
    let friendsList: Friend[] = [];

    // get list of user's friends' id from database
    const userRef = doc(db, "users", user.uid);
    const snap = await getDoc(userRef)

    let friendsUids: string[] = []
    if (snap.exists()) {
      friendsUids = snap.data().friends
    } else {
      throw new Error("user does not exist in database")
    }

    // iterate through friends lists
    for (const friendUid of friendsUids) {
      try {
        // get friend reference in the database
        const friendRef = doc(db, "users", friendUid);
        const friendSnap = await getDoc(friendRef);

        // if the friend exists
        if (friendSnap.exists()) {
          const friendData = friendSnap.data();
          const friendUsername = friendData.username;
          const friendScore = friendData.score

          // add friend information to the friends list
          friendsList.push({
            uid: friendUid, 
            username: friendUsername, 
            score: friendScore
          })
        }
      } catch (error) {
        console.error("error creating friends list")
      }
    }

    return friendsList

    // get friends information
    // add to array
  

  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}