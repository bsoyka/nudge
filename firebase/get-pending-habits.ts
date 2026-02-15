import { getAuth } from "firebase/auth";
import {
  collection,
  collectionGroup,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "./auth";
import { Habit } from "@/app/constants";

export const getPendingHabits = async (): Promise<Habit[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    let habitList: Habit[] = [];

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    let habitHids: string[] = [];
    let friendsList: string[] = [];
    if (userSnap.exists()) {
      habitHids = userSnap.data().pendingHabits;
      friendsList = userSnap.data().friends;
    }

    // console.log("habits id", habitHids)
    // console.log("friends list", friendsList)

    for (const habitHid of habitHids) {
      const q = query(
        collectionGroup(db, "habits"),
        where("hid", "==", habitHid),
      );

      const snap = await getDocs(q);
      // console.log(snap)

      snap.forEach((habit) => {
        const habitData = habit.data();
        if (habitHid == habitData.hid) {
          const habitItem: Habit = {
            hid: habitData.hid,
            habitName: habitData.habitName,
            streak: habitData.streak,
            viewers: habitData.viewers,
            auditor: habitData.auditor,
            status: habitData.status,
            owner: habitData.owner,
          };
          habitList.push(habitItem);
        }
      });
    }

    return habitList;
  } catch (error: any) {
    console.error(error.code, error.message);
  }
};
