"use client";
import "../styles/add-habit-modal.css";
import FriendsListSelector from "./FriendsListSelector";
interface AddHabitProps {
  setModalOn: any;
  getModalOn: any;
}

function AddHabitModal({ getModalOn, setModalOn }: AddHabitProps) {
  return (
    <>
      <div
        className="blurred-box"
        onClick={() => setModalOn(false)}
        tabIndex={-1}
      >
        <h1></h1>
      </div>
      <div className="add-habit-modal" tabIndex={-1}>
        <h1>New Habit:</h1>
        <input type="text" />
        <FriendsListSelector />
      </div>
    </>
  );
}

export default AddHabitModal;
