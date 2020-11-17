import React, { useState, useEffect } from 'react';
import PostList from '../components/shared/PostList';
import axios from 'axios';

export default function Home() {
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState();

  function onPageChange() {
    
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts')
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return <PostList name="Daily stories" posts={posts} page={page} onPageChange={onPageChange}></PostList>;
}
