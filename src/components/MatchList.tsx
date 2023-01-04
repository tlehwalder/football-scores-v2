import { Match } from '../types/entry';
import {MatchEntry} from './MatchEntry';

const MatchList: React.FC<{matches: Match[]}> = ({ matches }) => {
    console.log("matchlist")
    console.log(matches)
  return (
    <>
      <ul>
        {matches.map((match, _i) => {
          return <MatchEntry key={_i} match={match} />;
        })}
      </ul>
    </>
  );
};

export default MatchList;
