"use client";

import { loginWithGoogle } from "@/firebase/login-google";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { addHabit } from "@/firebase/add-habit";
import { addFriend } from "@/firebase/add-friend";
import { assignAuditor } from "@/firebase/assign-auditor";
import { updateHabitStatus } from "@/firebase/update-habit-status";
import { getFriends } from "@/firebase/get-friends";
import Button from "./components/Button";
import { getHabits } from "@/firebase/get-habits";

export default function Home() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  async function handleClick() {
    try {
      loginWithGoogle();
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function handleHabitClick() {
    try {
      addHabit("take a shower");
    } catch (error: any) {
      console.error(error.message);
    }
  }

  async function handleAddFriendClick() {
    console.log("add friend pressed")
    try {
      // test to add ben
      addFriend("CPGh2ZUU48WCz59iHHSf86Jji4g2")
    } catch (error: any) {
      console.error(error.message)
    }
  }

  async function handleAssignAuditor() {
    console.log("auditor assign pressed")
    const habitId = "Hv514XKg6o3r3PVw7jnu";
    const auditorUid = "CPGh2ZUU48WCz59iHHSf86Jji4g2"
    try {
      // test to add ben
      assignAuditor(habitId, auditorUid)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  async function handleUpdateHabitStatus() {
    console.log("update status pressed")
    const habitId = "Hv514XKg6o3r3PVw7jnu";
    const newStatus = 1;
    try {
      // test to add ben
      updateHabitStatus(habitId, newStatus)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  async function handleGetFriends() {
    console.log("getfreinds button pushed")
    try {
      const friends = getFriends()
      console.log(friends)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  async function handleGetHabits() {
    console.log("gethabits button pushed")
    try {
      const habits = getHabits()
      console.log(habits)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, [auth]);

  console.log(user);
  if (user) {
    console.log(user.displayName);
    // const uid = user.uid;
    const username = user.displayName;
    return (
      <>
        <NavBar />

        <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
          <h1>Hello, {username}!</h1>
          {/* test button */}
          <button onClick={() => signOut(auth)}>Sign out</button>
          <button onClick={handleHabitClick}>Add Habit</button>
          <button onClick={handleAddFriendClick}>Add Ben as friend</button>
          <button onClick={handleAssignAuditor}>Add Ben as auditor</button>
          <button onClick={handleUpdateHabitStatus}>update shower status</button>
          <button onClick={handleGetFriends}>get friends</button>
          <button onClick={handleGetHabits}>get habits</button>

        </main>
      </>
    );
  } else {
    console.log("no user");
    return (
      <>
        <NavBar />

        <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
          <h1 className="text-3xl font-bold">
            Give your friends a{" "}
            <span className="uppercase font-black">Nudge</span>!
          </h1>

          <div className="text-lg mt-4">
            Nudge is a collaborative habit tracking platform that keeps you
            accountable with help from your friends. Start tracking your habits
            today!
          </div>

          <Button onClick={handleClick} className="mt-5">
            Sign in with Google
          </Button>

          <div className="text-lg mt-4">
            With Nudge, you work with friends to{" "}
            <strong>get things done</strong>. Before the satisfaction of
            checking a habit off your daily to-do list, a trusted friend
            verifies you’ve done your work, keeping you accountable.
          </div>

          <div className="text-lg mt-4">
            Studies show you’re more likely to form good habits when working
            with someone. Nudge wants you to <strong>mend, not end,</strong>{" "}
            your habit streaks whenever they may break.
          </div>
        </main>
        	
      </>
    );
  }
}
