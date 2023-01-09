import React from 'react';

const MatchDayHeader: React.FC<{ matchDay?: string }> = ({ matchDay }) => (
  <>
    <div className='mb-4'>
      <h2>Matchday {matchDay}</h2>
    </div>
  </>
);

export { MatchDayHeader };
