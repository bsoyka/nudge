import React, { useState, useEffect } from 'react';
import api from '../Api'; //Use this to make API calls (e.g. await api.get("/endpoint"))
import ScoreItem from '../components/ScoreItem';
import { mockUsers } from '../../data/MockUsers';

const Leaderboard = () => {

    {/*https://medium.com/@nadia_15784/building-a-leaderboard-react-app-dbd557d4376e*/}

    const [scores, setScores] = useState([]);
  
    useEffect(() => {
      const fetchScores = async () => {
        try {
          const response = await api.get('/getscores');
          const sorted = response.data.sort((val1,val2) => val2.streak - val1.streak);
          setScores(sorted);
        } catch (error) {
          console.error('Error fetching scores:', error);
        }
      };
  
      fetchScores();
    }, []);
  
    return (
      <div className="leaderboard">
      <h1 className="leaderboardTitle">Leaderboard for Nudge</h1>
        {mockUsers.map(score => (
          <ScoreItem key={score.id} user_id={score.name} streak={score.streak} />
        ))}
      </div>
    );
  };
  
  export default Leaderboard;

