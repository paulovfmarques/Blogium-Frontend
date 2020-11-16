import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import SignContainer from '../../components/shared/SignContainer';
import SignInForm from './SignInForm';
import Button from '../../components/shared/Button';
import ButtonBox from '../../components/shared/ButtonBox';
import ErrorBox from '../../components/shared/ErrorBox';
import Account from '../../components/shared/Account';
import { useUserContext } from '../../contexts/UserContext';

export default function SignIn() {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  if (user) history.push('/');

  function onSubmit(e) {
    e.preventDefault();

    axios
      .post('http://localhost:3000/api/users/sign-in', {
        email,
        password,
      })
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
      })
      .catch((error) => {
        const { response } = error;
        if (response.data.error) return setError(response.data.error);
      });
  }

  return (
    <SignContainer>
      <h1>Welcome back</h1>
      <h2>
        Sign in to access your personalized homepage, follow authors and topics you love, and clap for stories that
        matter to you
      </h2>
      <SignInForm onSubmit={onSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Email"
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
        <ButtonBox>
          <Button>Sign in</Button>
        </ButtonBox>
        {error && <ErrorBox>{error}</ErrorBox>}
      </SignInForm>
      <Account screenRegistration>
        No account?
        <br />
        <Link to="/register">Sign Up</Link>
      </Account>
    </SignContainer>
  );
}
