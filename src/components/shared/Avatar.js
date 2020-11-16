import React from 'react';
import styled from 'styled-components';

export default function Avatar(props) {
  return (
    <AvatarLink {...props} target="_blank" rel="noopener noreferrer">
      <img src={props.avatarUrl} />
    </AvatarLink>
  );
}

const AvatarLink = styled.a`
  img {
    display: block;
    border-radius: 50%;
  }

  ${({ smaller }) =>
    smaller &&
    `
  img {
    width: 30px;
    height: 30px;
    }
  `}

  ${({ small }) =>
    small &&
    `
  img {
    width: 32px;
    height: 32px;
    }
  `}

  ${({ middle }) =>
    middle &&
    `
  img {
    width: 40px;
    height: 40px;
    }
  `}

  ${({ big }) =>
    big &&
    `
  img {
    width: 40px;
    height: 40px;
    }
  `}

  ${({ circled }) =>
    circled &&
    `
  img {
    border-radius: 50%;
  }
  `}

  ${({ squared }) =>
    squared &&
    `
  img {
    border-radius: 3px;
  }
  `}

  @media (min-width: 768px) {
    ${({ smaller }) =>
      smaller &&
      `
  img {
    width: 32px;
    height: 32px;
    }
  `}

    ${({ small }) =>
      small &&
      `
  img {
    width: 36px;
    height: 36px;
    }
  `}
  }
`;
