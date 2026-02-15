import { Contact } from "lucide-react";
import { getFriends } from "@/firebase/get-friends";
import { useEffect, useState } from "react";
import { Friend } from "../constants";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/auth";

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

  const fetchFriend = async () => {
    const promise = await getFriends();
    if (promise == null) {
      setFriends([]);
    } else {
      setFriends(promise);
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (n) => fetchFriend());
  }, []);

  return (
    <div className="friends-list">
      {getFriend.map((friend) =>
        FriendProfileButton(friend, getSelectedFriend, setSelectedFriend),
      )}
    </div>
  );
}

export default FriendsListSelector;
