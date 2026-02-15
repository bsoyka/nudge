"use client";
import "../styles/add-habit-modal.css";
import FriendsListSelector from "./FriendsListSelector";
interface AddHabitProps{
	setModalOn: any;
	getModalOn: any;
}




function AddHabitModal({getModalOn, setModalOn} : AddHabitProps){
	return(
		<>
			<div className="blurred-box" onClick={() => setModalOn(false)} tabIndex={-1}><h1></h1></div>
			<div className="add-habit-modal" tabIndex={-1} >
        <h1 >New Habit:</h1>
        <p className="text-lg">How can you make every day just a little more productive? Enter a habit you’d like to track, and select a friend who can verify when you’ve completed it.</p>
				<input type="text"/>
				<FriendsListSelector/>
			</div>
		</>
	);

}


export default AddHabitModal;
