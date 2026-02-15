"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchUser } from "../constants";
import { getNamesThatStartWith } from "@/firebase/get-names";
import SearchCard from "./SearchCard";
import { makeFriendRequest } from "@/firebase/make-friend-request";

export const SearchBar = () => {
  const [input, setInput] = useState<string>("");
  const [userList, setUserList] = useState<SearchUser[] | undefined>([]);

  useEffect(() => {
    const fetchNames = async () => {
      if (input.length > 0) {
        const response = await getNamesThatStartWith(input);
        setUserList(response);
      } else {
        setUserList([]);
      }
    }

    fetchNames()
  }, [input]);

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  async function handleFriendRequest(friendUid: string) {
    console.log("friend request button pressed")
    try {
      // test to add ben
      makeFriendRequest(friendUid)
    } catch (error: any) {
      console.error(error.message)
    }
  }

  return (
    <div className="flex flex-col m-5">
      <div className="input-wrapper mb-5">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search.."
          value={input}
          onChange={handleTextChange}
        />
      </div>
      <div>
        {userList?.map((user) => (
          <button key={user.uid} onClick={() => handleFriendRequest(user.uid)}>
            <SearchCard username={user.username} photo={user.photo}/>
          </button>
        ))}
      </div>
    </div>
    
  );
};
