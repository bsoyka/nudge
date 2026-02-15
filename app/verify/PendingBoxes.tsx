"use client";

import PendingBox from "./PendingBox";
import { useEffect, useState } from "react";
import { getPendingHabits } from "@/firebase/get-pending-habits";
import { Habit } from "../constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/auth";

function PendingBoxes() {
  const [getPending, setPending] = useState<Habit[]>([]);
	const fetchPending = async () => {
    const serverPending = await getPendingHabits();
    if (serverPending != null) {
      return serverPending;
    }
    return null;
  };
  useEffect(() => {
onAuthStateChanged(auth ,(n) => fetchPending());}, []);


  return (
    <div className="dashboard">
      {getPending.map((habit) => (
        <PendingBox
          getPending={getPending}
          setPending={setPending}
          habit={habit}
          key={habit.hid}
        />
      ))}
    </div>
  );
}

export default PendingBoxes;
