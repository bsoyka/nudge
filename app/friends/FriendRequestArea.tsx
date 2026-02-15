"use client";
import { Check, X, Contact} from "lucide-react";
import { getFriendRequests } from "@/firebase/get-friend-requests";
import { rejectFriendRequest } from "@/firebase/reject-friend-request";
import { addFriend } from "@/firebase/add-friend";

import "./social.css";
import "../styles/checkbox.css"
import { Friend } from "../constants";
import {  useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/auth";

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
	};
	useEffect(() =>{
		onAuthStateChanged(auth ,(n) => handleGetFriends());}
	, []);
	const FriendRequest = ({friend} : FriendRequestProps) => {
		const acceptFriendRequest = () => {
						setFriendRequests(getFriendRequest.filter((item : Friend) => {
				if(item.uid != friend.uid){
					return true;
				}
				return false;
			}))
			addFriend(friend.uid);

		};

		const declineFriendRequest = () => {
			setFriendRequests(getFriendRequest.filter((item : Friend) => {
				if(item.uid != friend.uid){
					return true;
				}
				return false;
			}))

			rejectFriendRequest(friend.uid);
		};
		return(
			<div className="friend-request">
				<Contact className="profile-photo"/>
				<h1>{friend.username}</h1>
				<X id="x" className="status-box cursor-pointer" onClick={declineFriendRequest}/>
				<Check id="check" className="status-box cursor-pointer" onClick={acceptFriendRequest}/>
			</div>

		);
	}

	return(
		<div className="friend-section">
			{getFriendRequest.map((f) => <FriendRequest key={f.uid} friend={f}/>)}
		</div>
	);
}



export default FriendRequestArea;
