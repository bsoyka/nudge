"use client";
import Link from "next/link";
import ModalTriggerButton from "./ModalTriggerButton";
import { getHabits } from "@/firebase/get-habits";
import { onAuthStateChanged } from "firebase/auth";
import { getPendingHabits } from "@/firebase/get-pending-habits";
import { useEffect, useState } from "react";
import {Leaderboard} from "../components/Leaderboard";
import HabitBox from "../components/HabitBox";
import { Habit } from "../constants";
import "../styles/dashboard.css";
import {auth} from "@/firebase/auth"
import "../globals.css";
import PendingBoxes from "../verify/PendingBoxes";

function Dashboard(){
	const [getUserHabits, setUserHabits] = useState<Habit[]>([])
		const fetchHabits = async () => {
			const promise = await getHabits();
			if(promise == null){
			}
			else{
				setUserHabits(_ => promise);
			}
		}
	useEffect(() =>{
		onAuthStateChanged(auth ,(n) => fetchHabits());}
	, []);
	let [getNumPending, setNumPending] = useState<number>();
	useEffect(() => {
		const fetchPending = async () => {
			const promise = await getPendingHabits();
			if(promise == null){
				setNumPending(0);
			}
			else{
				console.log(promise);
				setNumPending(promise.length);
			}
		}
		fetchPending();
	}, []); 

	function GoToPending(){
		return(
			<div className="pending">
				<Link href="/verify"> You have {getNumPending} friend habits to checkout out! </Link>
			</div>
		);
	};
	return(
	<div className="dashboard">
			<div className="habits">
			{getUserHabits.map((habit : Habit) => <HabitBox habit={habit} key={habit.hid} />)}
			<ModalTriggerButton getHabits={getUserHabits} setHabits={setUserHabits}/>
			</div>
			<div className="leaderboard">
				<Leaderboard/>
			</div>
			<GoToPending/>
	</div>
	);
};

export default Dashboard;
