import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';

export default function Logo() {
  const [mounted, setMounted] = useState(false);
  const {theme} = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted && theme === 'dark' ? 
        <div className='transition-all'>
          <span className='text-3xl'>발</span>음&nbsp;&nbsp;
          <span className='text-3xl'>정</span>해주는&nbsp;&nbsp;
          <span className='bg-orange-400 text-3xl text-black rounded-md p-1'>
            남<span className='text-base'>자들&nbsp;&nbsp;</span>
          </span>
        </div>:
        <div>Pronunciation Convention</div>
      }
    </>
  );
}
