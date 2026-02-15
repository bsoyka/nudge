"use client";
"use client";
import React from "react";
import { SearchBar } from "../components/Searchbar";
import NavBar from "../components/NavBar";

export default function SearchBarPage() {
  return (
    <>
      <NavBar />
      <div className="search-bar-container">
        <SearchBar />
      </div>
    </>
  );
}
