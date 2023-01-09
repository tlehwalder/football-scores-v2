import React from 'react';

const MatchDayNavigation: React.FC<{ matchDay?: string }> = ({ matchDay }) => {
  const matchDayAsInt = parseInt(matchDay ?? '');
  const isFirstMatchDay = matchDayAsInt === 1;
  const isLastMatchDay = matchDayAsInt === 34;
  return (
    <div className='mt-8 text-3xl'>
      {isFirstMatchDay ? null : (
        <a href={`/${matchDayAsInt - 1}`} title='previous matchday'>
          ⬅️
        </a>
      )}
      {isLastMatchDay ? null : (
        <a
          className='ml-4'
          href={`/${matchDayAsInt + 1}`}
          title='next matchday'
        >
          ➡️
        </a>
      )}
    </div>
  );
};

export { MatchDayNavigation };
