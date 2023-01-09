import reactLogo from '../assets/react.svg';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center fixed bottom-0 left-0 bg-[#2d2d2d]'>
      <div className='flex flex-col items-center'>
        <p className='flex items-center'>
          Built with
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          and
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </p>
        <p>
          with data from{' '}
          <a className='font-bold' href='https://www.openligadb.de/'>
            openligadb
          </a>
        </p>
      </div>
    </div>
  );
};
