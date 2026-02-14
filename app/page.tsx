import NavBar from "./components/NavBar";

export default function Home() {
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
        <h3 className="text-xl font-bold">Sign up or log in</h3>
        <button>Sign in with Google</button>
      </main>
    </>
  );
}
