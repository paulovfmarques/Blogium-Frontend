import React from 'react';
import PostList from '../components/shared/PostList';

export default function Home() {
  const name = 'NOME DO BLOG';
  const description = 'Descrição do blog';

  return <PostList name={name} description={description}></PostList>;
}
