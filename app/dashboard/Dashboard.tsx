"use client";
import ModalTriggerButton from "./ModalTriggerButton";
import { getHabits } from "@/firebase/get-habits";
import { useEffect, useState } from "react";
import HabitBox from "../components/HabitBox";
import { Habit } from "../constants";
import "../styles/dashboard.css";
import "../globals.css";

function Dashboard() {
  let [getUserHabits, setUserHabits] = useState<Habit[]>([]);
  let [getTest, setTest] = useState<number>(0);
  useEffect(() => {
    const fetchHabits = async () => {
      const promise = await getHabits();
      if (promise != undefined) {
        setUserHabits(promise);
      }
    };
    fetchHabits();
  }, [getUserHabits, getTest]);

  return (
    <div className="dashboard">
      {getUserHabits.map((habit: Habit) => (
        <HabitBox habit={habit} key={habit.hid} />
      ))}
      <ModalTriggerButton getHabits={getUserHabits} setHabits={setUserHabits} />
    </div>
  );
}

export default Dashboard;
