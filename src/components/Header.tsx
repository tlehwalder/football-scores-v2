import React from "react";

const Header: React.FC<{ matchDay: string }> = ({ matchDay }) => (
  <>
    <header>
      <h1>
        <span className="header-prefix">Latest Bundesliga&nbsp;</span>Scores ⚽{" "}
        <span className="matchday-suffix">Matchday {matchDay}</span>
      </h1>
    </header>
  </>
);

export { Header };
