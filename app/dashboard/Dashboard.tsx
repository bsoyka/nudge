"use client";
import AddHabit from "./AddHabit"; 
import ModalTriggerButton from "./ModalTriggerButton";
import { getHabits } from "@/firebase/get-habits";
import { useEffect, useLayoutEffect, useState } from "react";
import HabitBox from "../components/HabitBox";
import {Habit, Status} from "../constants";
import "../styles/dashboard.css";
import "../globals.css";
import { fetchSignInMethodsForEmail } from "firebase/auth";

async function fetchHabits(set: any){
		const promise = await getHabits();
			if(promise != undefined){
				set(promise);
			}

}
	


function Dashboard(){
	let [getUserHabits, setUserHabits] = useState<Habit[]>([]);
	fetchHabits(setUserHabits);
	return(
	<div className="dashboard">
			{getUserHabits.map((habit : Habit) => <HabitBox habit={habit} key={habit.hid} />)}
			<ModalTriggerButton getHabits={getUserHabits} setHabits={setUserHabits}/>
	</div>
	);

};

export default Dashboard;
