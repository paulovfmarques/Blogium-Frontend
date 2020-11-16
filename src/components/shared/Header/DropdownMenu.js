import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function DropdownMenu() {
  return (
    <Container>
      <li>
        <DropdownMenuLink to="/profile">My Profile</DropdownMenuLink>
      </li>
      <li>
        <DropdownMenuLink to="/sign-out">Sign out</DropdownMenuLink>
      </li>
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

const DropdownMenuLink = styled(Link)`
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
