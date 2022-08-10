import Header from "./Header";
import MatchList from "./MatchList";
import MatchDayNavigation from "./MatchDayNavigation";

const MatchDayPage = ({ matches, matchDay }) => {
  return (
    <>
      <Header matchDay={matchDay} />
      <MatchList matches={matches} />
      <MatchDayNavigation matchDay={matchDay} />{" "}
    </>
  );
};

export default MatchDayPage;
