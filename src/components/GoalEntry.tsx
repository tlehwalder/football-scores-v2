import { NumberOfViewers } from '../types/entry';

type GoalEntryProps = {
  isHomeGoal: boolean;
  playerName: string;
  matchMinute: string;
};
const GoalEntry: React.FC<GoalEntryProps> = ({
  isHomeGoal,
  playerName,
  matchMinute,
}) => {
  const homeGoal = isHomeGoal ? playerName : null;
  const awayGoal = !isHomeGoal ? playerName : null;

  return (
    <>
      <li className='grid grid-cols-12 text-base'>
        <span className='col-span-5 justify-self-end'>{homeGoal}</span>
        <span className='col-span-2'>{matchMinute}'</span>
        <span className='col-span-5 justify-self-start'>{awayGoal}</span>
      </li>
    </>
  );
};

export { GoalEntry };
