"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { SearchUser } from "../constants";
import { getNamesThatStartWith } from "@/firebase/get-names";

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

  return (
    <div className="flex flex-col">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to search.."
          value={input}
          onChange={handleTextChange}
        />
      </div>
      <div>
        {userList?.map((user) => (
          <div key={user.uid}>
            {user.username}
          </div>
        ))}
      </div>
    </div>
    
  );
};
