import { Habit } from "@/app/constants";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./auth";

export const getHabits = async (): Promise<Habit[] | undefined> => {
  // get current user
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    console.log("no user signed in");
    return;
  }

  try {
    // get user's habits
    const habitRef = collection(db, "users", user.uid, "habits");
    const habitSnap = await getDocs(habitRef);

    // make a list of hids
    const habits = habitSnap.docs.map((doc) => ({
      ...doc.data(),
    }));

    // make a list of Habit items
    let habitList: Habit[] = [];
    for (const habit of habits) {
      const habitItem: Habit = {
        hid: habit.hid,
        habitName: habit.habitName,
        streak: habit.streak,
        viewers: habit.viewers,
        auditor: habit.auditor,
        status: habit.status,
        owner: habit.owner,
      };

      habitList.push(habitItem);
    }

    return habitList;
  } catch (error: any) {
    console.error(error.code, error.message);
  }
};
