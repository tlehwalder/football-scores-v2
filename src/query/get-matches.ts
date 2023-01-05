import { ArrayOfMatch } from '../types/entry';
import { OPEN_LIGA_DB_URL } from '../config/source';
import { MatchDayResponse } from '../types/query';

export async function getMatches(): Promise<MatchDayResponse> {
  const res = await fetch(OPEN_LIGA_DB_URL);
  const data: ArrayOfMatch['Match'] = await res.json();

  return {
    matches: data,
    matchDay: data[0].Group.GroupOrderID,
  };
}
