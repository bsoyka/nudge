type ScoreItemProps = {
  user_id: string;
  streak: number;
};

const ScoreItem = (props: ScoreItemProps): any => {
  const { user_id, streak } = props;
  return (
    <div className="streakItem">
      <span className="userId">{user_id}</span>
      <span className="userScore">{streak}</span>
    </div>
  );
};

export default ScoreItem;
