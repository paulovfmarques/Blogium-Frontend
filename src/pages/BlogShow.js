import React, { useState, useEffect } from 'react';
import PostList from '../components/shared/PostList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BlogShow() {
  const { userId } = useParams();

  const [posts, setPosts] = useState(null);
  const [numberOfPosts, setNumberOfPosts] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  function onPageChange(newPage) {
    setPage(newPage);
  }

  useEffect(() => {
    const offset = (page - 1) * postsPerPage;
    const limit = postsPerPage;

    axios
      .get(`http://localhost:3000/api/users/${userId}/posts`, {
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
    <PostList
      name="Daily stories by user"
      posts={posts}
      page={page}
      onPageChange={onPageChange}
      postCount={numberOfPosts}
      postsPerPage={postsPerPage}
    />
  );
}
