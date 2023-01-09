import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';

import GoalList from './GoalList';
import { Match } from '../types/entry';

const MatchEntry: React.FC<{ match: Match }> = ({ match }) => {
  const [isGoalListShown, setGoalListShown] = useState(false);

  const fallbackPoints = (points?: string) => points ?? '-';
  const teamHomePoints = fallbackPoints(match.MatchResults[0]?.PointsTeam1);
  const teamAwayPoints = fallbackPoints(match.MatchResults[0]?.PointsTeam2);

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
      <li className='flex flex-col text-xl py-2'>
        <div className='grid grid-cols-12 w-full'>
          <div className='flex items-center col-span-5 justify-end'>
            <span>{teamHomeName}</span>
            <img
              className='h-6 object-contain ml-4'
              src={teamHomeIcon}
              alt={`${teamHomeName} Logo`}
            />
          </div>
          <div className='col-span-2 '>{scoreLineInner}</div>
          <div className='flex items-center col-span-5'>
            <img
              className='h-6 object-contain mr-4'
              src={teamAwayIcon}
              alt={`${teamAwayName} Logo`}
            />
            <span>{teamAwayName}</span>
          </div>
        </div>
        {isGoalListShown ? <GoalList goals={goals} /> : null}
      </li>
    </>
  );
};

export { MatchEntry };
