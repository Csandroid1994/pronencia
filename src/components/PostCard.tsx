import React from 'react';
import Link from 'next/link';

import {MdDateRange} from 'react-icons/md';
import {AiOutlineComment, AiOutlineEye} from 'react-icons/ai';

interface PostCardProps {
  data: PostCardData
}

interface PostCardData {
  id: string;
  word: string;
  mostLikePronunciation: string;
  helpfulCount: number;
  tags: string[];
  opinionCount: number;
  viewCount: number;
  createdAt: string;
}

export default function PostCard(props: PostCardProps) {
  const {id, word, mostLikePronunciation, helpfulCount, tags, opinionCount, viewCount, createdAt} = props.data;
  return (
    <Link href={`/post/${id}`}>
      <a>
        <div className='border border-gray-300 my-3 w-full rounded-md 
        dark:border-white dark:text-white flex  dark:hover:border-orange-400
        hover:border-orange-400 duration-500 shadow-md'>
          <div className='w-1/12 bg-orange-400 h-auto rounded-md flex flex-col justify-center'>
            <p className='text-lg text-center'>{helpfulCount}</p>
            <p className='text-xs text-center'>🐥helpful!</p>
          </div>
          <div className='p-3 w-full flex flex-col'>
            <p className='text-3xl mb-3'>{word}?</p>
            <div className='flex justify-between'>
              <div className='flex gap-2 underline text-sky-400'>
                {tags.map((tag, index) => {
                  return <div key={index}>#{tag}</div>;
                })}
              </div>
              <div className='text-md dark:text-white flex gap-2 items-center'>
                <MdDateRange />{createdAt}
                <AiOutlineEye />{viewCount}
                <AiOutlineComment />{opinionCount}
              </div>
            </div>
          </div>
          <div className='w-1/5 bg-sky-400 h-auto rounded-md flex flex-col justify-center'>
            <p className='text-sm text-center'>🐧가장 인기 있는 발음</p>
            <p className='animate-bounce text-xl text-center mt-2'>{mostLikePronunciation}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}
