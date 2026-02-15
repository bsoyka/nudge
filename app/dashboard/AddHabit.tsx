"use client";
import { useState } from "react";
import "../styles/add-habit-modal.css";
import FriendsListSelector from "./FriendsListSelector";
import { addHabit } from "@/firebase/add-habit";
interface AddHabitProps{
	setModalOn: any;
	getModalOn: any;
}



function AddHabitModal({getModalOn, setModalOn} : AddHabitProps){
	const [getInput, setInput] = useState("");
	const [getSelectedFriend, setSelectedFriend] = useState("");
	return(
		<>
			<div className="blurred-box" onClick={() => setModalOn(false)} tabIndex={-1}><h1></h1></div>
			<div className="add-habit-modal" tabIndex={-1} >
				<h1 >New Habit:</h1>
				<input type="text" value={getInput} onChange={(e) => setInput(e.target.value)}/>
				<FriendsListSelector getSelectedFriend={getSelectedFriend} setSelectedFriend={setSelectedFriend}/>
				{(getInput != "" && getSelectedFriend != "" ? <button onClick={() => {setModalOn(false)}}>Submit</button> 
					: <button disabled> Please Input Data</button>)}
			</div>
		</>
	);

}


export default AddHabitModal;
