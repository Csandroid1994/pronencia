import React, {useState} from 'react';
import {BiMicrophone, BiSearchAlt} from 'react-icons/bi';

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className='relative flex shadow-xl'>
        <input 
          type='text' 
          className='w-96 h-14 bg-gray-100 rounded-md pl-4 text-3xl focus:outline-none focus:ring-4 focus:ring-orange-400 
          dark:bg-white dark:text-black' 
          placeholder='검색' 
          value={searchInput}
          onChange={handleInput}
        />
        <div className='absolute flex gap-2 right-0 text-3xl items-center h-14 mr-4'>
          <BiSearchAlt className='text-orange-400'/>
          <BiMicrophone className='text-orange-400'/>
        </div>
      </div>
      <div></div>
    </>
  );
}
