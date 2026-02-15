"use client";

import ScoreItem from "./ScoreItem";
import {db} from "@/firebase/auth.ts"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Leaderboard.css";

export function Leaderboard(props){
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
        <h1 className="leaderboardTitle">Leaderboard for Nudge</h1>
        {data.map(value =>
          <ScoreItem 
          key ={value.id}
          user_id = {value.username}
          streak = {value.score}
          />
        )
        
        }
  

      </>
  );
};

export default Leaderboard;
