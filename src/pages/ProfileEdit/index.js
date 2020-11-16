import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import SignContainer from '../../components/shared/SignContainer';
import Button from '../../components/shared/Button';
import ButtonBox from '../../components/shared/ButtonBox';
import ErrorBox from '../../components/shared/ErrorBox';
import ProfileEditForm from './ProfileEditForm';
import { useUserContext } from '../../contexts/UserContext';

export default function ProfileEdit() {
  const { user, setUser } = useUserContext();
  const [username, setUsername] = useState(user ? user.username : '');
  const [avatarUrl, setAvatarUrl] = useState(user ? user.avatarUrl : '');
  const [biography, setBiography] = useState(user ? user.biography : '');
  const [error, setError] = useState(null);
  const history = useHistory();

  if (!user) {
    history.push('/');
    return null;
  }

  function onSubmit(e) {
    e.preventDefault();

    axios
      .put(
        'http://localhost:3000/api/users/edit',
        {
          username,
          avatarUrl,
          biography,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      )
      .then((response) => {
        if (!response.data) return setError('User not found');

        setUser({
          id: response.data.id,
          username: response.data.username,
          avatarUrl: response.data.avatarUrl,
          biography: response.data.biography,
          email: response.data.email,
          token: response.data.token,
        });

        history.push('/');
      })
      .catch((error) => {
        const { response } = error;
        if (response.data.error) return setError(response.data.error);
      });
  }

  return (
    <SignContainer>
      <h1>Profile Edit</h1>
      <ProfileEditForm onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Your name"
          required
        />
        <input
          type="url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="Avatar url"
          required
        />
        <textarea
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
          placeholder="Talk about you"
          rows="4"
          cols="50"
          required
        />
        <ButtonBox>
          <Button>Confirm</Button>
        </ButtonBox>
        {error && <ErrorBox>{error}</ErrorBox>}
      </ProfileEditForm>
    </SignContainer>
  );
}
