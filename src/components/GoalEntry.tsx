import { useContext } from "react";

const GoalEntry = ({ isHomeGoal, playerName, matchMinute }) => {
  const homeGoal = isHomeGoal ? playerName : null;
  const awayGoal = !isHomeGoal ? playerName : null;

  return (
    <>
      <li className="goal-line">
        <span className="goal-home">{homeGoal}</span>
        <span>{matchMinute}'</span>
        <span>{awayGoal}</span>
      </li>
    </>
  );
};

export default GoalEntry;
