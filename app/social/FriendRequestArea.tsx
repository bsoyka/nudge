"use client";
import { Check, X, Contact} from "lucide-react";
import { getFriendRequests } from "@/firebase/get-friend-requests";
import { rejectFriendRequest } from "@/firebase/reject-friend-request";
import { addFriend } from "@/firebase/add-friend";

import "./social.css";
import "../styles/checkbox.css"
import { Friend } from "../constants";
import { useState } from "react";

interface FriendRequestProps{
	friend : Friend;
}


function FriendRequestArea(){

	const [getFriendRequest, setFriendRequests] = useState<Friend[]>([]);
	const handleGetFriends = async () => {
		const serverFriends = await getFriendRequests();
		if(serverFriends != null){
			setFriendRequests(serverFriends);
		}
		handleGetFriends();
	};

	const FriendRequest = ({friend} : FriendRequestProps) => {
		const acceptFriendRequest = () => {
		addFriend(friend.uid);
			setFriendRequests(getFriendRequest.filter((item : Friend) => {
				if(item.uid != friend.uid){
					return true;
				}
				return false;
			}))
		};
	
		const declineFriendRequest = () => {
			rejectFriendRequest(friend.uid);
			setFriendRequests(getFriendRequest.filter((item : Friend) => {
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
			{getFriendRequest.map((f) => <FriendRequest friend={f}/>)}
		</div>
	);
}



export default FriendRequestArea;
