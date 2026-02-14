//'use client';
import Link from "next/link";

function NavBarLink({ path, name }: { path: string; name: string }) {
  return (
    <Link className="border-b-2 border-white" href={{ pathname: path }}>
      {name}
    </Link>
  );
}

function NavBar() {
  return (
    <nav className="flex w-full h-14 gap-3 justify-start items-center bg-primary p-5">
      <NavBarLink path="/" name="Dashboard" />
      <NavBarLink path="/page1" name="Other Page" />
    </nav>
  );
}

export default NavBar;
