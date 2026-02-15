"use client";
"use client";
import React from "react";
import { SearchBar } from "../components/Searchbar";
import NavBar from "../components/NavBar";
import FriendRequestArea from "./FriendRequestArea";

export default function SearchBarPage() {
  return (
    <>
      <NavBar />
      <div className="search-bar-container">
        <SearchBar />

      </div>
		<FriendRequestArea/>
    </>
  );
}
