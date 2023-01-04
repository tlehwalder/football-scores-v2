import MatchList from "./MatchList";
import MatchDayNavigation from "./MatchDayNavigation";
import { ArrayOfMatch } from '../types/entry';
import React from 'react';
import { GetMatchesResponse } from '../types/query';
import { getMatches } from '../query/get-matches';
import {Header} from './Header';

const MatchDay = () => {
    const [matches, setMatches] = React.useState<ArrayOfMatch["Match"]>([]);
    const [matchDay, setMatchDay] = React.useState("");

    React.useEffect(() => {
        getMatches()
            .then((response: GetMatchesResponse) => {
                setMatchDay(response.matchDay);
                setMatches(response.matches);
            });
    }, [])


    return (
    <>
        <Header matchDay={matchDay} />
        <MatchList matches={matches} />
        <MatchDayNavigation matchDay={matchDay}/>
    </>
  );
};

export { MatchDay };
