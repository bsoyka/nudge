import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import Footer from "../components/Footer";
import PendingBoxes from "./PendingBoxes";

export default function VerifyPage() {
  return (
    <div>
      <NavBar />

      <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
        <h1 className="text-2xl font-bold">Verify Your Friends&apos; Habits</h1>

        <p className="text-lg mt-4">
          Your friends have been productive, and they’re counting on you to keep
          them honest. Verify whether they’ve actually completed their daily
          habits. Not sure? Reach out to nudge them back on track.
        </p>

        <PendingBoxes />
      </main>

      <Footer />
    </div>
  );
}
