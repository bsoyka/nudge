import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
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

    const q = query(
      collection(db, "users", user.uid, "habits"),
      where("status", "==", 1)
    );

    const querySnap = await getDocs(q)

    querySnap.forEach((habit) => {
      const habitData = habit.data()
      const habitItem : Habit = {
        hid: habitData.hid,
        habitName: habitData.habitName,
        streak: habitData.streak,
        viewers: habitData.viewers,
        auditor: habitData.auditor,
        status: habitData.status,
        owner: habitData.owner,
      }

      habitList.push(habitItem);
    })

    return habitList
  } catch (error: any) {
    console.error(error.code, error.message)
  }
  
};
