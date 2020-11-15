import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignContainer from '../../components/shared/SignContainer';
import SignInForm from './SignInForm';
import Button from '../../components/shared/Button';
import ButtonBox from '../../components/shared/ButtonBox';
import ErrorBox from '../../components/shared/ErrorBox';
import Account from '../../components/shared/Account';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  function onSubmit(e) {
    e.preventDefault();

    axios
      .post('/api/users/new', {
        email,
        password,
      })
      .then((response) => {
        //...
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
