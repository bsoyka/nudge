'use client';

import { loginWithGoogle } from "@/firebase/login-google";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { useEffect, useState } from "react";

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
      <div>
        <div>no user signed in</div>
        <button onClick={handleClick}>Login with google</button>
      </div>
    )
  }

}
