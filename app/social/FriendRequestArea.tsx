"use client";
import { Check, X, Contact} from "lucide-react";

import "./social.css";
import "../styles/checkbox.css"
import { Friend } from "../constants";
import { useState } from "react";

interface FriendRequestProps{
	friend : Friend;
}

const example = [{uid:"hello", username:"John", score: 10}]

function FriendRequestArea(){
	const serverFriends = example;
	const [getFriendRequests, setFriendRequests] = useState<Friend[]>(serverFriends);
	
	


	const FriendRequest = ({friend} : FriendRequestProps) => {
		const acceptFriendRequest = () => {
			//API to accept
			setFriendRequests(getFriendRequests.filter((item : Friend) => {
				if(item.uid != friend.uid){
					return true;
				}
				return false;
			}))
		};
	
		const declineFriendRequest = () => {
			//API to decline
			setFriendRequests(getFriendRequests.filter((item : Friend) => {
				if(item.uid != friend.uid){
					return true;
				}
				return false;
			}))
		};
		return(
			<div className="friend-request">
				<Contact className="profile-photo"/>
				<h1>{friend.username}</h1>
				<X id="x" className="status-box" onClick={declineFriendRequest}/>
				<Check id="check" className="status-box" onClick={acceptFriendRequest}/>
			</div>
				
		);
	}

	return(
		<div className="friend-section">
			{getFriendRequests.map((f) => <FriendRequest friend={f}/>)}
		</div>


	);
}



export default FriendRequestArea;
