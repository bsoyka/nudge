"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddHabitModal from "./AddHabit";
import "../styles/add-habit-modal.css";

interface ModalProps {
  setHabits: any;
  getHabits: any;
}

function ModalTriggerButton({ setHabits, getHabits }: ModalProps) {
  const [getModal, setModal] = useState(false);
  return (
    <>
	  <div className="plus">
      	<Plus onClick={() => setModal(true)} className="plusplus"/>
		<h1>Add a Habit</h1> 
	  </div>
      {getModal && (
        <AddHabitModal
          getHabit={getHabits}
          setHabit={setHabits}
          setModalOn={setModal}
          getModalOn={getModal}
        />
      )}
    </>
  );
}

export default ModalTriggerButton;
