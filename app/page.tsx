"use client";

import { loginWithGoogle } from "@/firebase/login-google";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Footer from "./components/Footer";

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
          <h1 className="text-3xl font-bold">Hello, {username}!</h1>

          <Button onClick={() => signOut(auth)}>Sign out</Button>

          <div className="text-lg mt-4">
            Pick a habit. Add a friend. Start tracking. They’ll verify your
            daily check-ins to keep you honest and motivated.
          </div>

          <div className="text-lg mt-4">
            Stumble along the way? That’s part of growth. Nudge gives you and
            your friends the tools you need to mend your streaks, support each
            other, and grow together.{" "}
            <strong>Welcome to the Nudge community!</strong>
          </div>
        </main>

        <Footer />
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

        <Footer />
      </>
    );
  }
}
