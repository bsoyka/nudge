"use client";
import React, { useState, useEffect } from "react";
// import api from "../Api"; //Use this to make API calls (e.g. await api.get("/endpoint"))
import ScoreItem from "../components/ScoreItem";
import { mockUsers } from "../../data/MockUsers";
import NavBar from "../components/NavBar";
import {db} from "@/firebase/auth.ts"
import { collection, getDocs } from "firebase/firestore";

function Leaderboard(props){
  const [data, setData] = useState([])
  const userRef = collection(db, "users")

  useEffect(() =>{
      const getData = async()=>{
        const userData = await getDocs(userRef)
        const value = userData.docs.map(val=>({id:val.id, ...val.data()}))
        setData(value)
      }
      getData()
    /*https://medium.com/@nadia_15784/building-a-leaderboard-react-app-dbd557d4376e*/
},[])

  //const [scores, setScores] = useState([]);


  /*
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = getFriends()
        const sorted = response.data.sort(
          (val1, val2) => val2.streak - val1.streak,
        );
        setScores(sorted);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };

    fetchScores();
  }, []);
  

  return (
    <>

      <NavBar />
    

      <div className="leaderboard">
        <h1 className="leaderboardTitle">Leaderboard for Nudge</h1>
        {mockUsers.map((score) => (
          <ScoreItem
            key={score.id}
            user_id={score.name}
            streak={score.streak}
          />
        ))}

      </div>
      */
     return (
      <>

      <NavBar />
      <div className="leaderboard">
        <h1 className="leaderboardTitle">Leaderboard for Nudge</h1>
        {data.map(value =>
          <ScoreItem 
          key ={value.id}
          user_id = {value.user_id}
          streak = {value.score}
          />

        )
        
        }
      </div>
  

      </>
  );
};

export default Leaderboard;
