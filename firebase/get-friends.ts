import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, orderBy, query } from "firebase/firestore";
import { db } from "./auth";
import { Friend } from "@/app/constants";


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
    //const snap = await getDoc(userRef)
    const userAll = collection(db, "users");
    const q = query(userAll, orderBy("score", "asc"));
    const snap = await getDoc(userRef)
  


    // get list of friend uids
    let friendsUids: string[] = []
    if (snap.exists()) {
      friendsUids = snap.data().friends
    } else {
      throw new Error("user does not exist in database")
    }

    // iterate through friends lists
    for (const friendUid of friendsUids) {
      try {
        // get friend user reference in the database
        const friendRef = doc(db, "users", friendUid);
        const friendSnap = await getDoc(friendRef);

        // if the friend exists
        if (friendSnap.exists()) {
          const friendData = friendSnap.data();

          // add friend information to the friends list
          friendsList.push({
            uid: friendUid, 
            username: friendData.username, 
            score: friendData.score,
            photo: friendData.photo
          })
        }
      } catch (error) {
        console.error("error creating friends list")
      }
    }
    friendsList.sort((val1,val2) => val2.score - val2.score)
    return friendsList

  } catch (error: any) {
    console.error("error logging in with google", error.code, error.message)
  }
}