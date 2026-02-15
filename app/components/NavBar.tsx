//'use client';
import Link from "next/link";
import Image from "next/image";

function NavBarLink({ path, name }: { path: string; name: string }) {
  return (
    <Link className="hover:font-bold transition-all" href={{ pathname: path }}>
      {name}
    </Link>
  );
}

function NavBar() {
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
      <div className="flex gap-12 ml-auto text-lg">
        <NavBarLink path="/dashboard" name="Dashboard" />
        <NavBarLink path="/leaderboard" name="Leaderboard" />
        <NavBarLink path="/searchbar" name="Search" />
        <NavBarLink path="/social" name="Social" />
        <NavBarLink path="/verify" name="Verify for Friends" />
      </div>
    </nav>
  );
}

export default NavBar;
