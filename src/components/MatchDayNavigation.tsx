import { useContext } from "react";

const MatchDayNavigaiton: React.FC<{matchDay: string}> = ({ matchDay }) => {
  const matchDayAsInt = parseInt(matchDay);
  return (
    <div>
      {matchDayAsInt >= 1 ? (
          <a href={`/${matchDayAsInt - 1}`} title="previous matchday">prev</a>
      ) : null}
      {matchDayAsInt <= 33 ? (
          <a href={`/${matchDayAsInt + 1}`} title="next matchday">next</a>
      ) : null}
    </div>
  );
};

export default MatchDayNavigaiton;
