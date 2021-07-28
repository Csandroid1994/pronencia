import React from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';

import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';

const posts = {
  id: '1',
  word: 'ASUS',
  pronunciation: '아수스',
  likes: 15,
  hates: 22,
  opinions: 1,
  views: 131,
  createdAt: new Date().toLocaleDateString(),
};

export default function Search() {
  const router = useRouter();
  const {word} = router.query;

  return (
    <Layout>
      <Head>
        <title>{word}의 발음은? - 발.정.남</title>
      </Head>
      <div className='flex flex-col items-start'>
        <div className='flex justify-between w-full items-baseline'>
          <h1 className='text-white text-5xl mt-24 mb-10'>{word}에 대한 검색 결과</h1>
          <SearchBar />
        </div>
        <hr className='border-b-2 border-blueGray-300 w-full' />
      </div>
    </Layout>
  );
}
