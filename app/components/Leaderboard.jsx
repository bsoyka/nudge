"use client";

import ScoreItem from "./ScoreItem";
import { db } from "@/firebase/auth.ts";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import "./Leaderboard.css";

export function Leaderboard(props) {
  const [data, setData] = useState([]);
  const userRef = collection(db, "users");

  useEffect(() => {
    const getData = async () => {
      const userData = await getDocs(userRef);
      const value = userData.docs.map((val) => ({ id: val.id, ...val.data() }));
      setData(value);
    };
    getData();
    /*https://medium.com/@nadia_15784/building-a-leaderboard-react-app-dbd557d4376e*/
  }, []);
  return (
    <>
      <h1 className="leaderboardTitle">Global Leaderboard</h1>
      {data.map((value) => (
        <ScoreItem
          key={value.id}
          user_id={value.username}
          streak={value.score}
        />
      ))}
    </>
  );
}

export default Leaderboard;
