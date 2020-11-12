import React from 'react';
import Spinner from '../../components/shared/Spinner';
import BlogHeader from './BlogHeader';
import PreContent from '../../components/shared/PreContent';
import Posts from './Posts';
import PostPreview from './PostPreview';
import posts from '../../../data/posts';

export default function Home({ data }) {
  // if (!data) {
  //   return <Spinner />;
  // }

  const name = 'NOME DO BLOG';
  const description = 'Descrição do blog';
  const author = 'AUTOR DO BLOG';

  return (
    <main>
      <BlogHeader name={name} description={description} />
      <PreContent />
      <Posts>
        {posts.map((p) => (
          <PostPreview post={p} author={author} key={p.id} />
        ))}
      </Posts>
    </main>
  );
}
