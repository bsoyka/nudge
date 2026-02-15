"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "@/firebase/auth";

function NavBarLink({ path, name }: { path: string; name: string }) {
  return (
    <Link className="hover:font-bold transition-all" href={{ pathname: path }}>
      {name}
    </Link>
  );
}

function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <nav className="flex w-full h-17 justify-start items-center bg-primary px-25 py-6 text-light">
      <Link href="/" className="flex items-center h-full mr-4">
        <Image
          src="/nudge-logo.svg"
          alt="Nudge logo"
          width={120}
          height={40}
          className="h-full w-auto"
        />
      </Link>
      <div className="flex gap-12 ml-auto text-xl items-center">
        <NavBarLink path="/dashboard" name="Dashboard" />
        <NavBarLink path="/friends" name="Friends" />
        <NavBarLink path="/verify" name="Verify for Friends" />

        {user && user.photoURL && (
          <Image
            src={user.photoURL}
            alt={user.displayName || "User profile"}
            width={40}
            height={40}
            className="rounded-full border border-light cursor-pointer"
            onClick={() => signOut(auth)}
          />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
