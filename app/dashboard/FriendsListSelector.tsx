import { Contact } from "lucide-react"



const tempFriends = ["Ben", "Ritesh", "Aidan", "Hottie"];
function FriendProfileButton(name : string){
	return(
		<div className="friend-profile">
			<Contact />
			<h1>{name}</h1>
		</div>
	);
}

function getFriends() : string[]{
	return tempFriends;
}

function FriendsListSelector(){
	return(
		<div className="friends-list">
			{getFriends().map((name) => FriendProfileButton(name))}
		</div>
		
	);
}


export default FriendsListSelector;
