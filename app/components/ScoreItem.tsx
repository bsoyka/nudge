import React from "react";

type ScoreItemProps = {
    user_id: string;
    streak: number;


  };
  {/* show a singular score */}
  
  const ScoreItem = (props: ScoreItemProps): any => {
  const { user_id, streak } = props;
    return (
      <div className="streakItem">
        <span className="userId">{user_id}</span>
        <span className="userScore">{streak}</span>
      </div>
    );

  }

  
  export default ScoreItem;