"use client";

import { useState } from "react";
import AddHabitModal from "./AddHabit";

function ModalTriggerButton() {
  const [getModal, setModal] = useState(false);
  return (
    <>
      <button onClick={() => setModal(true)}> SetModal</button>
      {getModal && (
        <AddHabitModal setModalOn={setModal} getModalOn={getModal} />
      )}
    </>
  );
}

export default ModalTriggerButton;
