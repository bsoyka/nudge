"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddHabitModal from "./AddHabit";
import "../styles/add-habit-modal.css";



function ModalTriggerButton(){
	const [getModal, setModal] = useState(false);	
	return(
		<>
			<Plus onClick={() => setModal(true) } className="plus"/> 
			{getModal && <AddHabitModal setModalOn={setModal} getModalOn={getModal}/>}
		</>
	);
}

export default ModalTriggerButton
