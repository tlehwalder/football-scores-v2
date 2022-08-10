export interface Welcome1 {
  ArrayOfMatch: ArrayOfMatch;
}

export interface ArrayOfMatch {
  Match: Match[];
  "_xmlns:i": string;
  _xmlns: string;
}

export interface Match {
  Goals: Goals;
  Group: Group;
  LastUpdateDateTime: Date;
  LeagueId: string;
  LeagueName: string;
  Location: Location;
  MatchDateTime: Date;
  MatchDateTimeUTC: Date;
  MatchID: string;
  MatchIsFinished: string;
  MatchResults: MatchResults;
  NumberOfViewers: NumberOfViewers;
  Team1: Team;
  Team2: Team;
  TimeZoneID: string;
}

export interface Goals {
  Goal: GoalElement[] | PurpleGoal;
}

export interface GoalElement {
  Comment: NumberOfViewers;
  GoalGetterID: string;
  GoalGetterName: string;
  GoalID: string;
  IsOvertime: string;
  IsOwnGoal: string;
  IsPenalty: string;
  MatchMinute: NumberOfViewers | string;
  ScoreTeam1: string;
  ScoreTeam2: string;
}

export interface NumberOfViewers {
  "_i:nil": string;
}

export interface PurpleGoal {
  Comment: NumberOfViewers;
  GoalGetterID: string;
  GoalGetterName: string;
  GoalID: string;
  IsOvertime: string;
  IsOwnGoal: string;
  IsPenalty: string;
  MatchMinute: string;
  ScoreTeam1: string;
  ScoreTeam2: string;
}

export interface Group {
  GroupID: string;
  GroupName: string;
  GroupOrderID: string;
}

export interface Location {
  LocationCity?: string;
  LocationID?: string;
  LocationStadium?: string;
  "_i:nil"?: string;
}

export interface MatchResults {
  MatchResult: MatchResult[];
}

export interface MatchResult {
  PointsTeam1: string;
  PointsTeam2: string;
  ResultDescription: ResultDescription;
  ResultID: string;
  ResultName: ResultName;
  ResultOrderID: string;
  ResultTypeID: string;
}

export enum ResultDescription {
  ErgebnisNachEndeDerOffiziellenSpielzeit = "Ergebnis nach Ende der offiziellen Spielzeit",
  ZwischenstandZurHalbzeit = "Zwischenstand zur Halbzeit",
}

export enum ResultName {
  Endergebnis = "Endergebnis",
  Halbzeit = "Halbzeit",
}

export interface Team {
  ShortName: string;
  TeamGroupName: NumberOfViewers;
  TeamIconUrl: string;
  TeamId: string;
  TeamName: string;
}
