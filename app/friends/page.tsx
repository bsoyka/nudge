"use client";
import React from "react";
import { SearchBar } from "../components/Searchbar";
import NavBar from "../components/NavBar";
import FriendRequestArea from "./FriendRequestArea";
import "./social.css";

export default function SearchBarPage() {
  return (
    <>
      <NavBar />
      <div className="search-bar-container">
        <SearchBar />
      </div>
	  <h1 className="h1h1"> Friend Requests: </h1>
	  <div className= "div-div">
		<FriendRequestArea/>
	  </div>
		
    </>
  );
}
