import React from 'react';
import { useParams } from 'react-router-dom';

import { MatchDayResponse } from '../types/query';
import { getMatches } from '../query/get-matches';
import { getMatchDay } from '../query/get-matchday';

import { Header } from './Header';
import { MatchDayNavigation } from './MatchDayNavigation';
import { MatchList } from './MatchList';
import { ArrayOfMatch } from '../types/entry';

const MatchDay = () => {
  const { urlMatchDay } = useParams();

  const [matches, setMatches] = React.useState<ArrayOfMatch['Match']>([]);
  const [matchDay, setMatchDay] = React.useState(urlMatchDay);

  function setDataFromResponse(response: MatchDayResponse) {
    setMatchDay(response.matchDay);
    setMatches(response.matches);
  }

  React.useEffect(() => {
    if (urlMatchDay) {
      getMatchDay(urlMatchDay).then((response) =>
        setDataFromResponse(response)
      );
    } else {
      getMatches().then((response) => setDataFromResponse(response));
    }
  }, []);

  return (
    <>
      <Header matchDay={matchDay} />
      <MatchList matches={matches} />
      <MatchDayNavigation matchDay={matchDay} />
    </>
  );
};

export { MatchDay };
