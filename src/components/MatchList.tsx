import React from 'react';
import { Match } from '../types/entry';
import { MatchEntry } from './MatchEntry';

const MatchList: React.FC<{ matches: Match[] }> = ({ matches }) => (
  <ul>
    {matches.map((match, _i) => (
      <MatchEntry key={_i} match={match} />
    ))}
  </ul>
);
export { MatchList };
