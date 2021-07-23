import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className='w-full flex justify-center dark:bg-gray-700'>
      <div className='w-1152 px-3 h-screen flex flex-col justify-center items-center'>
        {children}
      </div>
    </div>
  );
}
