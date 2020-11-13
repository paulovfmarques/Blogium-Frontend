import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Account from './Account';
import SignContainer from '../../components/SignContainer';
import SignUpForm from './SignUpForm';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);

  function onSubmit(e) {
    e.preventDefault();

    axios
      .post('/api/users/new', {
        username,
        avatarUrl,
        bio,
        password,
        passwordConfirmation,
      })
      .then((response) => {
        //...
      });
  }

  return (
    <SignContainer screenRegistration>
      <h1>Join Bootcampium</h1>
      <h2>
        Create an account to personalize your homepage, follow your favorite authors and publications, applaud stories
        you love, and more.
      </h2>
      <SignUpForm onSubmit={onSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Username"
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
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Talk about you"
          rows="4"
          cols="50"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        <ButtonBox>
          <button className="btn btn--inverted">Sign up</button>
        </ButtonBox>
        {error && <ErrorBox>{error}</ErrorBox>}
      </SignUpForm>
      <Account screenRegistration>
        Already have an account?
        <br />
        <Link to="/login">Sign In</Link>
      </Account>
    </SignContainer>
  );
}

const ButtonBox = styled.div`
  padding-bottom: 15px;
  text-align: right;
`;

const ErrorBox = styled.div`
  padding-bottom: 15px;
  font-size: 16px;
  line-height: 20px;
  color: #ea0358;
`;
