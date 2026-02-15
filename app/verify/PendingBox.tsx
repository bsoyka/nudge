"use client";

import { Check, X} from "lucide-react";
import "./pending.css";
import "../styles/checkbox.css"
import { Habit, Status } from "../constants";
import { updateHabitStatus } from "@/firebase/edit-habit";

interface PendingBoxProps{
	habit: Habit,
	getPending: any,
	setPending: any,
};


function PendingBox({habit, getPending, setPending} : PendingBoxProps){

	const handleClickAccept = () =>  {
		setPending(getPending.filter(
			(pendingHabit : any) => {
				if(pendingHabit ===  habit){
					return false;
				}
				return true;
			}
		));
		updateHabitStatus(habit.hid, Status.FINISHED);
	};

	const handleClickDecline = () =>  {
		//acceptedHabit(habit);
		setPending(getPending.filter(
			(pendingHabit : any) => {
				if(pendingHabit ===  habit){
					return false;
				}
				return true;
			}
		));
		updateHabitStatus(habit.hid, Status.INCOMPLETE);
	};

	return(
		<div className="pending-box">
			<h1> {habit.habitName} </h1>
			<h2> Buddy name </h2>
			<div className="flex gap-10">
				<Check className="status-box" id = "check" onClick={handleClickAccept}/>
				<X className="status-box" id ="x" onClick={handleClickDecline}/>
			</div>
		</div>

	);

};


export default PendingBox;
