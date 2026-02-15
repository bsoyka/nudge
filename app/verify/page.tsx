import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import PendingBoxes from "./PendingBoxes";

export default function VerifyPage() {


  return (
    <div>
      <NavBar />

      <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
        <h1 className="text-2xl font-bold">Verify your friends&apos; habits</h1>

        <div className="text-lg mt-4">
          Your friends are counting on you to keep track of their progress.
          Verify whether they&apos;ve completed their daily habits, and help
          them mend their streaks if they haven&apos;t.
        </div>
		<PendingBoxes/>
   	 </main>
    </div>
  );
}
