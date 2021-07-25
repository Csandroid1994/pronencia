import React, {useState, useRef, useEffect} from 'react';
import {BiMicrophone, BiSearchAlt} from 'react-icons/bi';

// this List will be responsed from Server
export const top100List = [
  {word: 'function', pronuciation: '펑션', id: '1'},
  {word: 'git', pronuciation: '깃', id: '2'},
  {word: 'cssom', pronuciation: '씨에썸', id: '3'},
  {word: 'Ajax', pronuciation: '에이작스', id: '5'},
  {word: 'ASUS', pronuciation: '아수스', id: '4'},
  {word: 'Archive', pronuciation: '아카이브', id: '6'},
];

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, []);

  return (
    <div>
      <div className='relative flex shadow-xl'>
        <input 
          ref={inputRef}
          type='text' 
          className='transition duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-400
          w-96 h-14 bg-gray-100 rounded-md pl-4 text-3xl pr-24 dark:bg-white dark:text-black'
          placeholder='검색' 
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchInput}
          onChange={handleInput}
        />
        <div className='absolute flex gap-2 right-0 text-3xl items-center h-14 mr-4'>
          <BiSearchAlt className={isFocused ? 'text-orange-400' : 'text-gray-400'}/>
          <BiMicrophone className={isFocused ? 'text-orange-400' : 'text-gray-400'}/>
        </div>
      </div>
      <ul className=''>
        {isFocused && top100List.map((value) => {
          return (
            <li key={value.id}>{value.word}</li>
          );
        })}
      </ul>
    </div>
  );
}
