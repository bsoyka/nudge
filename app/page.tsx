import NavBar from "./components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>
          Give your friends a <i>Nudge</i>!
        </h1>
        <p>
          Nudge is a collaborative habit tracking platform that keeps you
          accountable with help from your friends. Start tracking your habits
          today!
        </p>
      </main>
    </>
  );
}
