export interface Welcome1 {
  ArrayOfMatch: ArrayOfMatch;
}

export interface ArrayOfMatch {
  Match: Match[];
  "_xmlns:i": string;
  _xmlns: string;
}

export interface Match {
  Goals: string;
  Group: Group;
  LastUpdateDateTime: Date;
  LeagueId: string;
  LeagueName: string;
  Location: Location;
  MatchDateTime: Date;
  MatchDateTimeUTC: Date;
  MatchID: string;
  MatchIsFinished: string;
  MatchResults: string;
  NumberOfViewers: Location;
  Team1: Team;
  Team2: Team;
  TimeZoneID: string;
}

export interface Group {
  GroupID: string;
  GroupName: string;
  GroupOrderID: string;
}

export interface Location {
  "_i:nil": string;
}

export interface Team {
  ShortName: string;
  TeamGroupName: Location;
  TeamIconUrl: string;
  TeamId: string;
  TeamName: string;
}
