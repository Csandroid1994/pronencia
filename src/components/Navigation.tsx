import React from 'react';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';
import {BiUserCircle} from 'react-icons/bi';

export default function Navigation() {
  return (
    <nav className='flex sticky bg-white opacity-90 w-full border-b-2 py-3 justify-center shadow-md dark:bg-black dark:border-gray-500'>
      <div className='h-16 flex space-y-0 justify-between items-center w-1152 px-3'>
        <Logo />
        <ul className='flex gap-x-4 antialiased text-3xl'>
          <ThemeSwitch />
          <BiUserCircle />
        </ul>
      </div>
    </nav>
  );
}
