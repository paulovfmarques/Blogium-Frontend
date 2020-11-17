import React, { useState, useEffect, useMemo } from 'react';
import PostList from '../components/shared/PostList';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [numberOfPosts, setNumberOfPosts] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  function onPageChange(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    const offset = (page - 1) * postsPerPage;
    const limit = postsPerPage;

    axios
      .get('http://localhost:3000/api/posts', {
        params: {
          offset,
          limit,
        },
      })
      .then((response) => {
        setNumberOfPosts(response.data.count);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <PostList name="Daily stories" posts={posts} page={page} onPageChange={onPageChange} postCount={numberOfPosts} />
  );
}
