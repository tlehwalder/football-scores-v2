import { useState } from "react";
import isEmpty from "lodash/isEmpty";

import GoalList from "./GoalList";
import { Match } from "../types/entry";

const MatchEntry: React.FC<{ match: Match }> = ({ match }) => {
  const [isGoalListShown, setGoalListShown] = useState(false);

  if(match.MatchResults.length === 0) return null;

  const fallbackPoints = (points?: string) => points ?? "-";
  const teamHomePoints = fallbackPoints(
    match.MatchResults.MatchResult[0].PointsTeam1
  );
  const teamAwayPoints = fallbackPoints(
    match.MatchResults.MatchResult[0].PointsTeam2
  );

  const {
    Team1: teamHome,
    Team2: teamAway,
    MatchIsFinished: isFinished,
    Goals: goals,
  } = match;

  const { TeamName: teamHomeName, TeamIconUrl: teamHomeIcon } = teamHome;
  const { TeamName: teamAwayName, TeamIconUrl: teamAwayIcon } = teamAway;

  const isAnyGoalScored = !isEmpty(goals);

  const toggleGoalList = () => setGoalListShown(!isGoalListShown);

  const scoreLineInner = isAnyGoalScored ? (
    <div onClick={toggleGoalList}>
      {teamHomePoints}:{teamAwayPoints}
    </div>
  ) : (
    <>
      {teamHomePoints}:{teamAwayPoints}
    </>
  );

  return (
    <>
      <li className="score-line-wrapper">
        <div className="score-line">
          <div className="score-line-element score-line-start">
            <span className="home-team team-name">{teamHomeName}</span>
            <img src={teamHomeIcon} />
          </div>
          <div className="score-line-element score-line-inner">
            {scoreLineInner}
          </div>
          <div className="score-line-element score-line-end">
            <img src={teamAwayIcon} />
            <span className="team-name">{teamAwayName}</span>
          </div>
        </div>
        {isGoalListShown ? <GoalList goals={goals} /> : null}
      </li>
    </>
  );
};

export { MatchEntry};
