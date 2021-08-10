import {useRouter} from 'next/router';
import React from 'react';
import Head from 'next/head';
import {AiOutlineQuestionCircle} from 'react-icons/ai';

import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';

export default function Post() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <Head>
        <title>{}의 발음은? - 발.정.남</title>
      </Head>
      <div className='flex flex-col items-start'>
        <div className='flex justify-between w-full items-end'>
          <h1 className='dark:text-white text-5xl mt-24 w-auto flex items-baseline'>
            ASUS
            <span className='text-3xl ml-4 mr-2 text-sky-400'>
              [아수스]
            </span>
            <span className='text-xl cursor-pointer'>
              <AiOutlineQuestionCircle />
            </span>
          </h1>
          <SearchBar />
        </div>
      </div>
      <hr className='border-b-2 border-gray-300 w-full my-4' />
    </Layout>
  );
}
