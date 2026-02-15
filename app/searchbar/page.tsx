"use client";"use client"
import React, { useState, useEffect } from "react";
import {SearchBar} from "../components/Searchbar";
import {SearchResultsList} from "../components/SearchResultsList";
import NavBar from "../components/NavBar";

export default function() {

  const[results, setResults] = useState([]);
  return (
    <>
      <NavBar />
      <div className ="search-bar-container">
			<SearchBar setResults={setResults}/>
			<SearchResultsList results={results} />
		</div>

    </>
  );
};
