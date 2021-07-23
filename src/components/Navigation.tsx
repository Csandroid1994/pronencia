import React from 'react';
import Logo from './Logo';
import ThemeSwitch from './ThemeSwitch';

export default function Navigation() {
  return (
    <nav className='flex sticky top-0 bg-white w-full border-b-2 justify-center shadow-md dark:bg-gray-600 dark:border-gray-500'>
      <div className='h-16 flex space-y-0 justify-between items-center w-1152 px-3'>
        <Logo />
        <ul className='flex gap-x-4 antialiased'>
          <ThemeSwitch />
        </ul>
      </div>
    </nav>
  );
}
