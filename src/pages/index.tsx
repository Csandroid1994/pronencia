import React from 'react';
import Navigation from 'components/Navigation';
import Layout from 'components/Layout';
import SearchBar from 'components/SearchBar';

export default function Home() {
  return (
    <>
      <Navigation />
      <Layout>
        <SearchBar />
      </Layout>
    </>
  );
}
