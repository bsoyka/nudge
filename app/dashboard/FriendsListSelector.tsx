import { Contact } from "lucide-react"



const tempFriends = ["Ben", "Ritesh", "Aidan", "Hottie", "Man", "Bob", "John", "Peter", "Mikey"];
function FriendProfileButton(name : string){
	return(
		<div className="friend-profile">
			<Contact />
			<h2>{name}</h2>
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
