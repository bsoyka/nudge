"use client";

import "../styles/checkbox.css";
import "../styles/habitbox.css";
import { Habit, Status } from "../constants";
import { Check, SquareDashed, CircleQuestionMark } from "lucide-react";
import { useState } from "react";

import { updateHabitStatus } from "@/firebase/edit-habit";
interface HabitBoxProps {
  habit: Habit;
}

function HabitBox(habitProp: HabitBoxProps) {
  const [getStatus, setStatus] = useState(habitProp.habit.status);
  const handlePendingRequest = () => {
    setStatus(Status.PENDING);
    updateHabitStatus(habitProp.habit.hid, Status.PENDING);
  };
  return (
    <div className="habit-box">
      <h1 className="habit-name"> {habitProp.habit.habitName}</h1>
      <h3 className="streak-text">Streak: {habitProp.habit.streak} 🔥</h3>
      <h3 className="auditor-text">
        Reviewer:{" "}
        {habitProp.habit.auditor != null && habitProp.habit.auditor.length > 25
          ? habitProp.habit.auditor.slice(0, 25)
          : habitProp.habit.auditor}
      </h3>
      {getStatus == Status.FINISHED ? (
        <Check id="check" className="status-box" />
      ) : getStatus == Status.PENDING ? (
        <CircleQuestionMark id={"question-mark"} className="status-box" />
      ) : (
        <SquareDashed
          id="square"
          className="status-box"
          onClick={handlePendingRequest}
        />
      )}
    </div>
  );
}

export default HabitBox;
