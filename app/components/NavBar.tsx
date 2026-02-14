"use client";
import Link from "next/link";

export default function () {
  return (
    <div>
      <Link href={{ pathname: "/" }}> Home </Link>
      <Link href={{ pathname: "/page1" }}> Other </Link>
    </div>
  );
}
