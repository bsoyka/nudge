"use client";
import { useState } from "react";
import "../styles/add-habit-modal.css";
import FriendsListSelector from "./FriendsListSelector";
import { addHabit } from "@/firebase/add-habit";
import { assignAuditor } from "@/firebase/assign-auditor";
import { Friend } from "../constants";
interface AddHabitProps {
  setModalOn: any;
  getModalOn: any;
}

function AddHabitModal({ getModalOn, setModalOn }: AddHabitProps) {
  const [getInput, setInput] = useState("");
  const [getSelectedFriend, setSelectedFriend] = useState<Friend>();

  const handleSubmit = async () => {
    setModalOn(false);

    const uid = await addHabit(getInput);

    if (uid != undefined && getSelectedFriend != null)
      assignAuditor(uid, getSelectedFriend.uid);
  };
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
        <p className="text-lg">
          How can you make every day just a little more productive? Enter a
          habit you’d like to track, and select a friend who can verify when
          you’ve completed it.
        </p>
        <input
          type="text"
          value={getInput}
          onChange={(e) => setInput(e.target.value)}
        />
        <FriendsListSelector
          getSelectedFriend={getSelectedFriend}
          setSelectedFriend={setSelectedFriend}
        />
        {getInput != "" && getSelectedFriend?.username != "" ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button disabled> Please Input Data</button>
        )}
      </div>
    </>
  );
}

export default AddHabitModal;
