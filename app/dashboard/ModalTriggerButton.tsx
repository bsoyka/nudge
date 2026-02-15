"use client";

import { useState } from "react";
import AddHabitModal from "./AddHabit";



function ModalTriggerButton(){
	const [getModal, setModal] = useState(false);	
	return(
		<>
			<button onClick={() => setModal(true)}>SetModal</button>
			{getModal && <AddHabitModal/>}
		</>
	);
}

export default ModalTriggerButton
