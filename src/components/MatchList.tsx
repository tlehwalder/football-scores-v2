import React from 'react';
import { Match } from '../types/entry';
import { MatchEntry } from './MatchEntry';

type MatchListProps = { matches: Match[]; isLoading: boolean };

const MatchList: React.FC<MatchListProps> = ({ matches, isLoading }) => {
  return (
    <ul>
      {matches.map((match, _i) => (
        <MatchEntry key={_i} match={match} />
      ))}
    </ul>
  );
};
export { MatchList };
