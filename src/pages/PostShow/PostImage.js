import React from 'react';
import styled from 'styled-components';

export default function PostImage({ post }) {
  return (
    <FigureContainer>
      <img src={`https://cdn-images-1.medium.com/max/1600/${post.imgDescriptor}`} />
    </FigureContainer>
  );
}

const FigureContainer = styled.figure`
  margin-top: 20px;
  margin-bottom: 52px;

  img {
    display: block;
    width: 100%;
    height: 50vh;
    object-fit: cover;
    object-position: 100% 80%;
  }

  @media (min-width: 768px) {
    margin-bottom: 80px;
  }
`;
