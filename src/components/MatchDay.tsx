import React from 'react';
import { useParams } from 'react-router-dom';

import { MatchDayResponse } from '../types/query';
import { getMatches } from '../query/get-matches';
import { getMatchDay } from '../query/get-matchday';

import { MatchDayHeader } from './MatchDayHeader';
import { MatchDayNavigation } from './MatchDayNavigation';
import { MatchList } from './MatchList';
import { ArrayOfMatch } from '../types/entry';
import { useQuery } from 'react-query';

const MatchDay = () => {
  const { urlMatchDay } = useParams();

  const [matches, setMatches] = React.useState<ArrayOfMatch['Match']>([]);
  const [matchDay, setMatchDay] = React.useState(urlMatchDay);

  function setDataFromResponse(response: MatchDayResponse) {
    setMatchDay(response.matchDay);
    setMatches(response.matches);
  }

  useQuery(urlMatchDay ?? '', () => {
    if (urlMatchDay) {
      getMatchDay(urlMatchDay).then((response) =>
        setDataFromResponse(response)
      );
    } else {
      getMatches().then((response) => setDataFromResponse(response));
    }
  });

  return (
    <>
      <MatchDayHeader matchDay={matchDay} />
      <div className='min-h-[396px]'>
        <MatchList matches={matches} />
      </div>
      <MatchDayNavigation matchDay={matchDay} />
    </>
  );
};

export { MatchDay };
