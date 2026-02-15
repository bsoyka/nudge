"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddHabitModal from "./AddHabit";
import "../styles/add-habit-modal.css";

interface ModalProps{
	setHabits : any;
	getHabits: any;
}

function ModalTriggerButton({setHabits, getHabits} : ModalProps){
	const [getModal, setModal] = useState(false);	
	setHabits(getHabits);
	return(
		<>
			<Plus onClick={() => setModal(true) } className="plus"/> 
			{getModal && <AddHabitModal getHabit={getHabits} setHabit={setHabits} setModalOn={setModal}  getModalOn={getModal}/>}
		</>
	);
}

export default ModalTriggerButton
