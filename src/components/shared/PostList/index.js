import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner';
import BlogHeader from './BlogHeader';
import PreContent from '../PreContent';
import Posts from './Posts';
import PostPreview from './PostPreview';
import axios from 'axios';

export default function PostList({ name, description }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!posts) return <Spinner />;

  return (
    <main>
      <BlogHeader name={name} description={description} />
      <PreContent />
      <Posts>
        {posts.length === 0 ? <h2>No stories yet 😔</h2> : posts.map((p) => <PostPreview post={p} key={p.id} />)}
      </Posts>
    </main>
  );
}
