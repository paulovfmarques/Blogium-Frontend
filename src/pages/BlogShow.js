import React from 'react';
import PostList from '../components/shared/PostList';
import { useUserContext } from '../contexts/UserContext';

export default function BlogShow() {
  const { user } = useUserContext();

  return <PostList name={user.username} description={user.biography}></PostList>;
}
