import { Contact } from "lucide-react"
import { getFriends } from "@/firebase/get-friends";
import { use, useState } from "react";
import { Friend } from "../constants";



const tempFriends = ["Ben", "Ritesh", "Aidan", "Hottie", "Man", "Bob", "John", "Peter", "Mikey"];

interface SelectorProps{
	setSelectedFriend : any;
	getSelectedFriend : any;
}

function FriendProfileButton(name : string, getSelected: any, setSelected: any){
	return(
		<div className={(getSelected != name ? "friend-profile" : "selected-friend-profile")} onClick={() => setSelected(name)} key={name}>
			<Contact />
			<h2>{name}</h2>
		</div>
	);
}

function FriendsListSelector({getSelectedFriend, setSelectedFriend} : SelectorProps){
	const [getFriend, setFriends] = useState<Friend[]>([]);
	getFriends().then((promiseFriends) => setFriends(promiseFriends ? promiseFriends : []));

	return(
		<div className="friends-list">
			{getFriend.map((friend) => FriendProfileButton(friend.username, getSelectedFriend, setSelectedFriend))}
		</div>
		
	);
}


export default FriendsListSelector;
