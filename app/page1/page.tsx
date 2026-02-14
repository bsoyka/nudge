import NavBar from "../components/NavBar";
import "../styles/page1.css";
import "../globals.css";
import HabitBox from "../components/HabitBox";
import {Habit} from "../constants";

function getHabitList() : Habit[]{
	return [];
}

export default function() {
	return(
		<>
			<NavBar/>
			<HabitBox/>
			<HabitBox/>
			<HabitBox/>
		</>
	);

}
