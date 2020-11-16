import React from 'react';
import styled from 'styled-components';
import InnerWrapper from './InnerWrapper';
import LinkSet from './LinkSet';
import Actions from './Actions';
import LogoLink from './LogoLink';
import GuestLink from './GuestLink';
import UserMenu from './UserMenu';
import { useUserContext } from '../../../contexts/UserContext';

export default function Header() {
  const { user } = useUserContext();

  function handleLogout(e) {
    console.log('IMPLEMENTAR LOGGOUT');
  }

  return (
    <Container>
      <InnerWrapper>
        <LinkSet>
          <LogoLink to="/" />
        </LinkSet>
        <Actions>{user ? <UserMenu user={user} /> : <GuestLink />}</Actions>
      </InnerWrapper>
    </Container>
  );
}

const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid var(--color-devider-light_gray);
  background-color: var(--color-bg-white-transparent);
`;
