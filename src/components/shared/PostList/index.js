import React from 'react';
import BlogHeader from './BlogHeader';
import PreContent from '../PreContent';
import Posts from './Posts';
import PostPreview from './PostPreview';
import posts from '../../../../data/posts';

export default function PostList({ name, description }) {
  const author = 'SOME AUTHOR';

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
