import { SEASON_YEAR } from '../config/source';
import { MatchDayResponse } from '../types/query';

export async function getMatchDay(matchDay: string): Promise<MatchDayResponse> {
  const res = await fetch(
    `https://www.openligadb.de/api/getmatchdata/bl1/${SEASON_YEAR}/${matchDay}`
  );
  const data = await res.json();

  return {
    matches: data,
    matchDay: data[0].Group.GroupOrderID,
  };
}
