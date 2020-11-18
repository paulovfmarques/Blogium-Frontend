import React, { useState } from 'react';
import axios from 'axios';
import { useUserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import PostManipulation from '../components/shared/PostManipulation';

export default function PostEdit() {
  const { user } = useUserContext();
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');
  const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
  const history = useHistory();

  if (!user) {
    alert('User not found...');
    history.push('/');
  }

  function onPostSaveButtonClick() {
    if (title.length < 10) return alert('Title must be at least 10 characters long');
    if (title.length > 30) return alert('Title must have less than 31 characters');
    if (content.length < 100) return alert('post content must be at least 100 characters long');
    if (!coverUrl) return alert('missing cover image');

    if (isSaveButtonDisabled) return;
    setSaveButtonDisable(true);

    axios
      .post(
        `http://localhost:3000/api/posts`,
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
      .then((response) => {
        const post = response.data;

        alert('Post was created!');
        history.push(`/posts/${post.id}`);
      })
      .catch(() => {
        history.push('/');
        alert('Post not found :/');
      });
  }

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      isSaveButtonDisabled={isSaveButtonDisabled}
    />
  );
}
