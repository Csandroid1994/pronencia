import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';
import PostCard from 'components/PostCard';

interface PostCardProps {
  id: string;
  word: string;
  mostLikePronunciation: string;
  helpfulCount: number;
  tags: string[];
  opinionCount: number;
  viewCount: number;
  createdAt: string;
}

const posts = [{
  id: '1',
  word: 'ASUS',
  mostLikePronunciation: '아수스',
  helpfulCount: 15,
  tags: ['프론트', '백엔드'],
  opinionCount: 1,
  viewCount: 131,
  createdAt: new Date().toLocaleDateString(),
}, {
  id: '2',
  word: 'Ajax',
  mostLikePronunciation: '에이작스',
  helpfulCount: 15,
  tags: ['프론트', '백엔드'],
  opinionCount: 1,
  viewCount: 131,
  createdAt: new Date().toLocaleDateString(),
}];

export default function Search() {
  const router = useRouter();
  const {word} = router.query;

  return (
    <Layout>
      <Head>
        <title>{word}에 대한 검색 결과 - 발.정.남</title>
      </Head>
      <div className='flex flex-col items-start'>
        <div className='flex justify-between w-full items-baseline'>
          <h1 className='dark:text-white text-5xl mt-24 mb-10'>&apos;{word}&apos;에 대한 검색 결과</h1>
          <SearchBar />
        </div>
        <hr className='border-b-2 border-gray-300 w-full' />
      </div>
      {posts.map((value: PostCardProps) => {
        return <div key={value.id}>
          <PostCard data={value}/>
        </div>;
      })}
    </Layout>
  );
}
