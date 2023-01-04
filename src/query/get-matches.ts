import { ArrayOfMatch } from '../types/list';
import { OPEN_LIGA_DB_URL } from '../config/source';
import { GetMatchesResponse } from '../types/query';

export async function getMatches(): Promise<GetMatchesResponse> {
  const res = await fetch(OPEN_LIGA_DB_URL);
  const data: ArrayOfMatch['Match'] = await res.json();

  return {
    matches: data,
    matchDay: data[0].Group.GroupOrderID,
  };
}
