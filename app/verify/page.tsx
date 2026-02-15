import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import HabitBox from "../components/HabitBox";
import { Habit, Status } from "../constants";

function getHabitList(): Habit[] {
  return [
    {
      name: "Write some code",
      status: Status.PENDING,
      streak: 1,
      auditor: "Ethan",
      id: 1,
      uid: 10,
    },
    {
      name: "Delete an agentic AI app",
      status: Status.INCOMPLETE,
      streak: 6,
      auditor: "Ethan",
      id: 2,
      uid: 10,
    },
    {
      name: "Mention Opus 4.6",
      status: Status.FINISHED,
      streak: 22,
      auditor: "Ben",
      id: 3,
      uid: 10,
    },
  ];
}

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

        <div className="dashboard">
          {getHabitList().map((habit) => (
            <HabitBox habit={habit} key={habit.id} />
          ))}
        </div>
      </main>
    </div>
  );
}
