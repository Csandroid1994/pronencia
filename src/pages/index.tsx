import React, {useEffect} from 'react';

import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';

export default function Home() {
  return (
    <>
      <Layout>
        <div className='w-full h-full flex justify-center items-center'>
          <SearchBar />
        </div>
      </Layout>
    </>
  );
}
