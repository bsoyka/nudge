"use client"
import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import "../globals.css";
import {ChartAreaInteractive} from "../components/habitsChart";
import Dashboard from "./Dashboard";

/*
const testHabit1 : Habit = {name: "WorkOut", status: Status.PENDING, streak: 1, auditor: "Ben", id: 1};
const testHabit2 : Habit = {name: "Drink", status: Status.INCOMPLETE, streak: 6, auditor: "Aidan", id: 1};
const testHabit3 : Habit = {name: "Walk The Dog", status: Status.FINISHED, streak: 22, auditor: "Ritesh", id: 10};
*/

//const testHabits : Habit[] = [testHabit1, testHabit2, testHabit3];





export default function() {

	return(
		<>
			<NavBar/>
						
			<Dashboard/>
			<div className="Chart">
			  </div>	
	
		</>
	);

}
