import React, { useState, useEffect } from 'react';
import PostList from '../components/shared/PostList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BlogShow() {
  const { userId } = useParams();

  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState();

  function onPageChange() {}

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${userId}/posts`)
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return <PostList name="Daily stories by user" posts={posts} page={page} onPageChange={onPageChange}></PostList>;
}
