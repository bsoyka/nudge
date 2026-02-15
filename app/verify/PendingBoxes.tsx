"use client";

import PendingBox from "./PendingBox"
import { useState } from "react";
import { Habit, Status } from "../constants";

function getHabitList(): Habit[] {
  return [
    {
      name: "Write some code",
      status: Status.PENDING,
      streak: 1,
      auditor: "Ethan",
      id: 1,
    },
    {
      name: "Delete an agentic AI app",
      status: Status.INCOMPLETE,
      streak: 6,
      auditor: "Ethan",
      id: 2,
    },
    {
      name: "Mention Opus 4.6",
      status: Status.FINISHED,
      streak: 22,
      auditor: "Ben",
      id: 3,
    },
  ];
}
function PendingBoxes(){
  const [getPending, setPending] = useState<Habit[]>(getHabitList());
	return(
		<div className="dashboard">
          {getPending.map((habit) => (
            <PendingBox getPending={getPending} setPending={setPending} habit={habit} key={habit.id} />
          ))
		  }
        </div>);
}

export default PendingBoxes;
