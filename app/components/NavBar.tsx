//'use client';
import Link from "next/link";
import Image from "next/image";

function NavBarLink({ path, name }: { path: string; name: string }) {
  return (
    <Link className="border-b-2 border-dark" href={{ pathname: path }}>
      {name}
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="flex w-full h-14 gap-3 justify-start items-center bg-primary p-5">
      <Link href="/" className="flex items-center h-full mr-4">
        <Image
          src="/nudge-logo.svg"
          alt="Nudge logo"
          width={120}
          height={40}
          className="h-full w-auto"
        />
      </Link>
      <NavBarLink path="/dashboard" name="Dashboard" />
      <NavBarLink path="/leaderboard" name="Leaderboard" />
      <NavBarLink path="/verify" name="Verify for Friends" />
    </nav>
  );
}

export default NavBar;
