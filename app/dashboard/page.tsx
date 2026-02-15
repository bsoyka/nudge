"use client";
import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import "../globals.css";
import HabitBox from "../components/HabitBox";
import { Habit, Status } from "../constants";
import { ChartAreaInteractive } from "../components/habitsChart";
import AddHabit from "./AddHabit";
import ModalTriggerButton from "./ModalTriggerButton";
import Footer from "../components/Footer";

const testHabit1: Habit = {
  habitName: "WorkOut",
  status: Status.PENDING,
  streak: 1,
  auditor: "Ben",
  hid: "1",
  viewers: [],
  owner: "Ethan",
};
const testHabit2: Habit = {
  habitName: "Drink",
  status: Status.INCOMPLETE,
  streak: 6,
  auditor: "Aidan",
  hid: "2",
  viewers: [],
  owner: "Ethan",
};
const testHabit3: Habit = {
  habitName: "Walk The Dog",
  status: Status.FINISHED,
  streak: 22,
  auditor: "Ritesh",
  hid: "10",
  viewers: [],
  owner: "Ethan",
};

function getHabitList(): Habit[] {
  return [testHabit1, testHabit2, testHabit3];
}

export default function Dashboard() {
  return (
    <>
      <NavBar />

      <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
        <h1 className="text-2xl font-bold">Your Dashboard</h1>

        <div className="text-lg mt-4">
          Track anything you want to accomplish daily! Your friends will keep
          you honest, verifying whether you’ve actually completed your tasks.
        </div>
        <div className="dashboard">
          {getHabitList().map((habit) => (
            <HabitBox habit={habit} key={habit.name} />
          ))}
          {getHabitList().map((habit) => (
            <HabitBox habit={habit} key={habit.name} />
          ))}
          {getHabitList().map((habit) => (
            <HabitBox habit={habit} key={habit.name} />
          ))}
          <ModalTriggerButton />
        </div>
      </main>

      <Footer />
    </>
  );
}
