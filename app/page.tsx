"use client";

import { loginWithGoogle } from "@/firebase/login-google";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";

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

        <main className="flex flex-col items-center justify-center text-align-center max-w-3xl m-auto p-10">
          <h1>Hello, {username}!</h1>
          <Button onClick={() => signOut(auth)} className="mt-5">
            Sign out
          </Button>
        </main>
      </>
    );
  } else {
    console.log("no user");
    return (
      <>
        <NavBar />

        <main className="flex flex-col items-center justify-center text-align-center max-w-3xl m-auto p-10">
          <h1 className="text-3xl font-bold">
            Give your friends a <i>Nudge</i>!
          </h1>

          <div className="text-lg">
            Nudge is a collaborative habit tracking platform that keeps you
            accountable with help from your friends. Start tracking your habits
            today!
          </div>

          <Button onClick={handleClick} className="mt-5">
            Sign in with Google
          </Button>
        </main>
      </>
    );
  }
}
