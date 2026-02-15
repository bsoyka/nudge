"use client";
import { useState, useEffect } from "react";
// import api from "../Api"; //Use this to make API calls (e.g. await api.get("/endpoint"))
import ScoreItem from "../components/ScoreItem";
import { mockUsers } from "../../data/MockUsers";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Leaderboard = () => {
  {
    /*https://medium.com/@nadia_15784/building-a-leaderboard-react-app-dbd557d4376e*/
  }

  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await api.get("/getscores");
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

      <main className="flex flex-col items-center justify-center max-w-3xl m-auto p-10">
        <h1 className="text-2xl font-bold">Leaderboard</h1>

        <p className="text-lg mt-4">What’s life without friendly competition? See how productive you and your friends have been!</p>

      <div className="leaderboard">
        {mockUsers.map((score) => (
          <ScoreItem
            key={score.id}
            user_id={score.name}
            streak={score.streak}
          />
        ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Leaderboard;
