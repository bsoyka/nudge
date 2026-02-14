import "../styles/habitbox.css";
import { Check, X, CircleQuestionMark} from "lucide-react";

enum status{
	PENDING,
	FINISHED,
	INCOMPLETE
}
function getHabitStatus() : status{ //API CALL to backend
	return status.FINISHED;
}

function getHabitName() : string{
	//API CALL
	return "Habit";
}


function HabitBox(){

	return(
		<div className="habit-box">
			<h1 className="habit-name"> {getHabitName()}</h1>

			{getHabitStatus() == status.FINISHED ? <Check className="check"/> 
				: getHabitStatus() == status.PENDING 
					? <CircleQuestionMark className="question-mark" /> 
				: <X className="x"/>}
		</div>
	);
}


export default HabitBox;
