import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./auth";
import { Habit } from "@/app/constants";

export const getPendingHabits = async () : Promise<Habit[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {

    let habitList : Habit[] = [];

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef)

    let habitHids = null

    if (userSnap.exists()) {    
      habitHids = userSnap.data().pendingHabits
    }
    
    for (const habitHid of habitHids) {
      const q = query(
        collection(db, "habits"),
        where("hid", "==", habitHid)
      );

      const snap = await getDocs(q);

      snap.forEach((habitDoc) => {
        const hData = habitDoc.data();
        const habitItem: Habit = {
          hid: hData.hid,
          habitName: hData.habitName,
          streak: hData.streak,
          viewers: hData.viewers,
          auditor: hData.auditor,
          status: hData.status,
          owner: hData.owner
        };
        habitList.push(habitItem);
      });
    }

    return habitList
  } catch (error: any) {
    console.error(error.code, error.message)
  }
  
};
