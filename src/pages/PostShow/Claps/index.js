import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../../../contexts/UserContext';
import ClapContainer from './ClapContainer';

export default function Claps({ post }) {
  const { user } = useUserContext();
  const [userClaps, setUserClaps] = useState(0);
  const [postTotalClaps, setPostTotalClaps] = useState(0);

  const fetchClaps = () => {
    let auth = { headers: { Authorization: `Bearer ${user.token}` } };
    axios
      .post(`http://localhost:3000/api/posts/${post.id}/claps`, {"claps": userClaps}, auth)
        .catch((err) => console.error(err.response.data));
  };

  function onCountChange({ count, countTotal }) {
    if (count < userClaps) return;

    setUserClaps(count);
    setPostTotalClaps(countTotal);
  }

  if (!user || !post) return null;

  return <ClapContainer 
    fetchClaps={fetchClaps} 
    count={userClaps} 
    countTotal={postTotalClaps} 
    maxCount={50} 
    onCountChange={onCountChange} />;
}
