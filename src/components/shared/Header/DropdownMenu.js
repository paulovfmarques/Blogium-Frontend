import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useUserContext } from '../../../contexts/UserContext';

export default function DropdownMenu() {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  if (!user) history.push('/');

  function onSignOutRequest() {
    axios
      .post(
        'http://localhost:3000/api/users/sign-out',
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        },
      )
      .then((_r) => {
        setUser(null);
      })
      .catch((_e) => setUser(null));
  }

  return (
    <Container>
      <DropdownMenuLi>
        <Link to="/new-story">New Story</Link>
      </DropdownMenuLi>
      <DropdownMenuLi>
        <Link to="/edit">Settings</Link>
      </DropdownMenuLi>
      <DropdownMenuLi onClick={onSignOutRequest}>Sign out</DropdownMenuLi>
    </Container>
  );
}

const Container = styled.ul`
  position: absolute;
  width: 100px;
  background-color: white;
  border-radius: 5px;
  top: 120%;
  user-select: none;
`;

const DropdownMenuLi = styled.li`
  display: inline-block;
  border-radius: 4px;
  background-color: transparent;
  font-size: 16px;
  color: var(--color-link-text);
  cursor: pointer;
  padding: 0 16px;
  height: 37px;
  line-height: 37px;
`;
