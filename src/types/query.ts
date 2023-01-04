import { ArrayOfMatch } from './entry';

export type GetMatchesResponse = {
  matches: ArrayOfMatch['Match'];
  matchDay: string;
};
