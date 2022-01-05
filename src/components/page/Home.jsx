import React from 'react';
import PostSearch from './PostSearch';
import Animals from './Animals';

function Home(props) {
  return (
    <div className="container-fluid bg-dark">
      <PostSearch />

      <Animals />
    </div>
  );
}
export default Home;
