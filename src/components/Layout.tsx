import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div className='w-full flex justify-center'>
        <div className='w-1152 px-3 h-screen'>
          {children}
        </div>
      </div>
    </>
  );
}
