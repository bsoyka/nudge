"use client"
import AddHabit from "./AddHabit";
import {use, useEffect} from "react";
import ModalTriggerButton from "./ModalTriggerButton";
import { getHabits } from "@/firebase/get-habits";
import { useEffectEvent, useState } from "react";
import HabitBox from "../components/HabitBox";
import { Habit, Status } from "../constants";
import "../styles/dashboard.css";
import "../globals.css";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { setUncaughtExceptionCaptureCallback } from "process";
import { unzip } from "zlib";

function Dashboard(){
	let [getUserHabits, setUserHabits] = useState<Habit[]>([]);
	useEffect(() => {
		const fetchHabits = async () => {
			const promise = await getHabits();
			if(promise == null){
				
			}
			else{
				setUserHabits(_ => promise);
			}
		}
		fetchHabits();
	}, []); 

	return(
	<div className="dashboard">
			{getUserHabits.map((habit : Habit) => <HabitBox habit={habit} key={habit.hid} />)}
			<ModalTriggerButton getHabits={getUserHabits} setHabits={setUserHabits}/>
	</div>
	);

};

export default Dashboard;
