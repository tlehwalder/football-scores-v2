import React from 'react';

import { GoalEntry } from './GoalEntry';
import { Goals } from '../types/entry';
import { assertString } from '../utils/assert-string';

type GoalListProps = { goals: Goals };

const GoalList: React.FC<GoalListProps> = ({ goals }) => {
  let scoreHome = '0';

  return (
    <ul className='py-4'>
      {goals.map((goal) => {
        const {
          ScoreTeam1: nextScoreHome,
          MatchMinute: matchMinute,
          GoalGetterName: playerName,
        } = goal;
        assertString(matchMinute);
        const matchMinuteString = String(matchMinute);
        const isHomeGoal = nextScoreHome !== scoreHome;
        scoreHome = nextScoreHome;

        return (
          <GoalEntry
            isHomeGoal={isHomeGoal}
            matchMinute={matchMinuteString}
            playerName={playerName}
          />
        );
      })}
    </ul>
  );
};

export default GoalList;
