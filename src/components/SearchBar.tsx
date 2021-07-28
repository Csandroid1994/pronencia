import React, {useState, useRef, useEffect} from 'react';
import {BiMicrophone, BiSearchAlt} from 'react-icons/bi';
const cn = require('classnames');
import {useRouter} from 'next/router';
// this List will be responsed from Server
export const popularSearch: Search[] = [
  {word: 'function', pronuncitaion: '펑션', id: '1'},
  {word: 'git', pronuncitaion: '깃', id: '2'},
  {word: 'cssom', pronuncitaion: '씨에썸', id: '3'},
  {word: 'Ajax', pronuncitaion: '에이작스', id: '5'},
  {word: 'ASUS', pronuncitaion: '아수스', id: '4'},
  {word: 'Archive', pronuncitaion: '아카이브', id: '6'},
];
interface Search {
  word: string;
  pronuncitaion: string;
  id: string;
}
interface Pointer {
  pin: number;
  length: number;
  focusedValue: string;
}

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [popularSearchList, setPopularSearchList] = useState<Search[]>([]);
  const [filteredPopularSearchList, setFilteredPopularSearchList] = useState<Search[]>([]);
  const [pointer, setPointer] = useState<Pointer>({pin: -1, length: 0, focusedValue: ''});
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFocused) {
      setSearchInput(e.target.value);
      const filteredArray = popularSearchList.filter((value) => value.word.includes(e.target.value));
      setFilteredPopularSearchList(() => [...filteredArray]);
      setPointer(() => ({pin: -1, length: filteredArray.length, focusedValue: ''}));
    }
  };

  const isMoveToDown = (pointer: Pointer) => pointer.pin >= -1 && pointer.pin < pointer.length - 1;
  const isMoveToUp = (pointer: Pointer) => pointer.pin <= 0;
  const initializePin = () => setPointer((prev) => ({...prev, pin: -1, focusedValue: ''}));
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    switch (e.code) {
    case 'ArrowDown':      
      if (!isMoveToDown(pointer)) {
        break;
      } else {
        setIsFocused(false);
        setPointer((prev) => ({...prev, pin: prev.pin + 1, focusedValue: filteredPopularSearchList[prev.pin + 1].word}));
        break;
      }
    case 'ArrowUp':
      if (isMoveToUp(pointer)) {
        initializePin();
        break;
      } else {
        setIsFocused(false);
        setPointer((prev) => ({...prev, pin: prev.pin - 1, focusedValue: filteredPopularSearchList[prev.pin - 1].word}));
        break;
      }
    case 'Enter':
      if (!isFocused) {
        setSearchInput(pointer.focusedValue);
        const filteredArray = popularSearchList.filter((value) => value.word.includes(pointer.focusedValue));
        setFilteredPopularSearchList(() => [...filteredArray]);
        setPointer(() => ({pin: -1, length: filteredArray.length, focusedValue: ''}));
        setIsFocused(true);
        break;
      } else {
        router.push(`/search/${searchInput}`);
      }
    default:
      setIsFocused(true);
      break;
    }
  };

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
    setPopularSearchList(() => [...popularSearch]);
  }, []);

  return (
    <div className='relative'>
      <div className='relative flex shadow-xl w-96'>
        <input 
          ref={inputRef}
          type='text' 
          className='transition duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-orange-400
          w-96 h-14 bg-gray-100 rounded-md pl-4 text-3xl pr-24 dark:bg-white dark:text-black'
          placeholder='검색' 
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className='absolute flex gap-2 right-0 text-3xl items-center h-14 mr-4'>
          <BiSearchAlt className={isFocused ? 'text-orange-400' : 'text-gray-400'}/>
          <BiMicrophone className={isFocused ? 'text-orange-400' : 'text-gray-400'}/>
        </div>
      </div>
      {searchInput && <div className='absolute top-16 rounded-lg overflow-hidden shadow-lg bg-white min-h-64 w-96'>
        <div className='text-gray-500'>
          <p className='mx-3 mt-3 px-2 text-gray-500'>
            {filteredPopularSearchList.length === 0 ? `'${searchInput}' 검색하기` : '인기 검색어'} 
          </p>
        </div>
        <div className='py-3 px-3'>
          {filteredPopularSearchList.map((value, index) => (
            <div key={value.id} className={cn('flex justify-between px-2 py-2', {'bg-orange-200': index === pointer.pin})}>
              <p className='flex text-gray-700'>{value.word}</p>
              <p className='text-gray-500 font-thin'>{value.pronuncitaion}</p>
            </div>
          ))}
        </div>
      </div>}
    </div>
  );
}
