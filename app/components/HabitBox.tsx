"use client";
import "../styles/habitbox.css";
import "../styles/checkbox.css";
import { Habit, Status } from "../constants";
import { Check, X, CircleQuestionMark } from "lucide-react";
import { useState } from "react";

interface HabitBoxProps {
  habit: Habit;
}

function HabitBox(habitProp: HabitBoxProps) {
  const [getStatus, setStatus] = useState(habitProp.habit.status);
  const handlePendingRequest = () => {
    setStatus(Status.PENDING);
    //API CALL
  };
  return (
    <div className="habit-box">
      <h1 className="habit-name"> {habitProp.habit.habitName}</h1>
      <h3 className="streak-text">Streak: {habitProp.habit.streak}</h3>
      <h3 className="streak-text">Auditor: {habitProp.habit.auditor}</h3>
      {getStatus == Status.FINISHED ? (
        <Check id="check" className="status-box" />
      ) : getStatus == Status.PENDING ? (
        <CircleQuestionMark id={"question-mark"} className="status-box" />
      ) : (
        <X id="x" className="status-box" onClick={handlePendingRequest} />
      )}
    </div>
  );
}

export default HabitBox;
