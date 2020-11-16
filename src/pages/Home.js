import React from 'react';
import PostList from '../components/shared/PostList';

export default function Home() {
  const name = 'Daily stories';
  const description = 'Be updated. Always.';

  return <PostList name={name} description={description}></PostList>;
}
