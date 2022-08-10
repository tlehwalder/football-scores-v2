import MatchEntry from "./MatchEntry";

const MatchList = ({ matches }) => {
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
