'use client';

import { loginWithGoogle } from "@/firebase/login-google";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

export default function Home() {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null)

  async function handleClick() {
    try{ 
      loginWithGoogle()
    } catch (error: any) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return unsubscribe
  }, [auth])

  console.log(user)
  if (user) {
    console.log(user.displayName)
    // const uid = user.uid;
    const username = user.displayName;
    return (
      <div>
        <h1>hello {username}</h1>
        <button onClick={() => signOut(auth)}>
          Signout
        </button>
      </div>
    )
    
  } else {
    console.log("no user")
    return (
      <>
      <NavBar />

      <header className="flex flex-col items-center justify-center text-align-center max-w-3xl m-auto p-10">
        <h1 className="text-3xl font-bold">
          Give your friends a <i>Nudge</i>!
        </h1>
        <div className="text-lg">
          Nudge is a collaborative habit tracking platform that keeps you
          accountable with help from your friends. Start tracking your habits
          today!
        </div>
      </header>

      <main className="flex flex-col items-center justify-center text-align-center max-w-3xl m-auto p-10">
        <h3 className="text-xl font-bold">Get started</h3>
        <button onClick={handleClick}>Sign in with Google</button>
      </main>
    </>
    )
  }

}
