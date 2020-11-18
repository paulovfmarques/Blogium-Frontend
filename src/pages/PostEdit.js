import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/shared/Spinner';
import { useUserContext } from '../contexts/UserContext';
import { useHistory, useParams } from 'react-router-dom';
import PostManipulation from '../components/shared/PostManipulation';

export default function PostEdit() {
  const { user } = useUserContext();

  const { postId } = useParams();
  const [post, setPost] = useState(null);

  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${postId}`)
      .then((response) => {
        const incomingPost = response.data;

        setPost(incomingPost);
        setTitle(incomingPost.title);
        setCoverUrl(incomingPost.coverUrl);
        setContent(incomingPost.content);
      })
      .catch(() => {
        history.push('/');
        alert('Post not found :/');
      });
  }, []);

  if (!user) {
    alert('User not found...');
    history.push('/');
  }

  function onPostSaveButtonClick() {
    if (title.length < 10) return alert('Title must be at least 10 characters long');
    if (title.length > 30) return alert('Title must have less than 31 characters');
    if (content.length < 100) return alert('post content must be at least 100 characters long');
    if (!coverUrl) return alert('missing cover image');

    axios
      .put(
        `http://localhost:3000/api/posts/${postId}`,
        {
          title,
          coverUrl,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      )
      .then(() => {
        alert('Post was edited!');
        history.push(`/posts/${postId}`);
      })
      .catch(() => {
        history.push('/');
        alert('Post not found :/');
      });
  }

  if (!post || !content) return <Spinner />;

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      postId={postId}
    />
  );
}
