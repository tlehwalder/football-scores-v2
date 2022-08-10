import { useContext } from "react";
import Link from "next/link";
import ThemeContext, { THEME_DARK } from "../context/ThemeContext";

const MatchDayNavigaiton = ({ matchDay }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      {matchDay >= 1 ? (
        <Link href={`/${parseInt(matchDay) - 1}`}>
          <a className="triangle-left" title="previous matchday"></a>
        </Link>
      ) : null}
      {matchDay <= 33 ? (
        <Link href={`/${parseInt(matchDay) + 1}`}>
          <a className="triangle-right" title="next matchday"></a>
        </Link>
      ) : null}
    </div>
  );
};

export default MatchDayNavigaiton;
