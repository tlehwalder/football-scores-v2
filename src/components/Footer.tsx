import reactLogo from '../assets/react.svg';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className='w-full flex justify-center items-center justify-self-end'>
      <p className='flex items-center'>
        built with
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        and
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </p>
    </div>
  );
};
