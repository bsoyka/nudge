"use client"
import NavBar from "../components/NavBar";
import "../styles/dashboard.css";
import "../globals.css";
import HabitBox from "../components/HabitBox";
import {Habit, Status} from "../constants";
import {ChartAreaInteractive} from "../components/habitsChart";
import AddHabit from "./AddHabit";
import ModalTriggerButton from "./ModalTriggerButton";


const testHabit1 : Habit = {name: "WorkOut", status: Status.PENDING, streak: 1, auditor: "Ben", id: 1, uid: 10};
const testHabit2 : Habit = {name: "Drink", status: Status.INCOMPLETE, streak: 6, auditor: "Aidan", id: 1, uid: 10};
const testHabit3 : Habit = {name: "Walk The Dog", status: Status.FINISHED, streak: 22, auditor: "Ritesh", id: 10, uid: 10};

const testHabits : Habit[] = [testHabit1, testHabit2, testHabit3];


function getHabitList() : Habit[]{
	return testHabits;
}




export default function() {
	return(
		<>
			<NavBar/>
			<div className="dashboard">
				{getHabitList().map((habit) => <HabitBox habit={habit} key={habit.name} />)}
				{getHabitList().map((habit) => <HabitBox habit={habit} key={habit.name} />)}
				{getHabitList().map((habit) => <HabitBox habit={habit} key={habit.name} />)}
				<ModalTriggerButton/>
			</div>
			<div className="Chart">
				  <ChartAreaInteractive/>
			  </div>	
	
		</>
	);

}
