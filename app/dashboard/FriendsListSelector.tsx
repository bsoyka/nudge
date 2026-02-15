import { Contact } from "lucide-react";
import { getFriends } from "@/firebase/get-friends";
import { useState } from "react";
import { Friend } from "../constants";

interface SelectorProps {
  setSelectedFriend: any;
  getSelectedFriend: any;
}

function FriendProfileButton(
  friend: Friend,
  getSelected: Friend,
  setSelected: any,
) {
  return (
    <div
      className={
        getSelected == null || getSelected.username != friend.username
          ? "friend-profile"
          : "selected-friend-profile"
      }
      onClick={() => setSelected(friend)}
      key={friend.username}
    >
      <Contact />
      <h2>{friend.username}</h2>
    </div>
  );
}

function FriendsListSelector({
  getSelectedFriend,
  setSelectedFriend,
}: SelectorProps) {
  const [getFriend, setFriends] = useState<Friend[]>([]);
  getFriends().then((promiseFriends) =>
    setFriends(promiseFriends ? promiseFriends : []),
  );

  return (
    <div className="friends-list">
      {getFriend.map((friend) =>
        FriendProfileButton(friend, getSelectedFriend, setSelectedFriend),
      )}
    </div>
  );
}

export default FriendsListSelector;
