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

  ${(props) =>
    props.smaller &&
    `
  img {
    width: 30px;
    height: 30px;
    }
  `}

  ${(props) =>
    props.small &&
    `
  img {
    width: 32px;
    height: 32px;
    }
  `}

  ${(props) =>
    props.middle &&
    `
  img {
    width: 40px;
    height: 40px;
    }
  `}

  ${(props) =>
    props.big &&
    `
  img {
    width: 40px;
    height: 40px;
    }
  `}

  ${(props) =>
    props.circled &&
    `
  img {
    border-radius: 50%;
  }
  `}

  ${(props) =>
    props.squared &&
    `
  img {
    border-radius: 3px;
  }
  `}

  @media (min-width: 768px) {
    ${(props) =>
      props.smaller &&
      `
  img {
    width: 32px;
    height: 32px;
    }
  `}

    ${(props) =>
      props.small &&
      `
  img {
    width: 36px;
    height: 36px;
    }
  `}
  }
`;
