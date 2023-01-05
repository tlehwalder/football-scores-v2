import React from 'react';

const MatchDayNavigation: React.FC<{ matchDay?: string }> = ({ matchDay }) => {
  const matchDayAsInt = parseInt(matchDay ?? '');
  const isNotFirstMatchDay = matchDayAsInt >= 1;
  const isNotLastMatchDay = matchDayAsInt <= 33;
  return (
    <div className='mt-8 text-3xl'>
      {isNotFirstMatchDay ? (
        <a href={`/${matchDayAsInt - 1}`} title='previous matchday'>
          ⬅️
        </a>
      ) : null}
      {isNotLastMatchDay ? (
        <a
          className='ml-4'
          href={`/${matchDayAsInt + 1}`}
          title='next matchday'
        >
          ➡️
        </a>
      ) : null}
    </div>
  );
};

export { MatchDayNavigation };
