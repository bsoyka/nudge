"use client"
import React, {useState} from 'react';


import {FaSearch} from "react-icons/fa";
import "./SearchBar.css";

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        if(!value) return;
        const q = 
        query(
        collection(db, "users"), 
        where("name", ">=", value),
        where("name", "<=", value + "\uf8ff")
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        setResults(results);
        /*
        fetch("put call here").then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return(
                value && 
                user &&
                user.name && 
                user.name.toLowerCase().includes(value)
                )
        });
        */
       //https://firebase.google.com/docs/firestore/query-data/get-data#web_1
       //changed to firebase instead of api call
    

    }
    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    }
    return(
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder = "Type to search.." value={input}
             onChange={(e) => setInput(e.target.value)} />
        </div>
    )

}