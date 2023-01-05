import React from 'react';

const Header: React.FC<{ matchDay?: string }> = ({ matchDay }) => (
  <>
    <div className='mb-4'>
      <h2>Matchday {matchDay}</h2>
    </div>
  </>
);

export { Header };
