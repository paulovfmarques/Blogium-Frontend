import React from 'react';
import styled from 'styled-components';
import ImageLink from './ImageLink';
import Content from './Content';
import TextLink from './TextLink';
import Meta from './Meta';
import SubMeta from './SubMeta';
import OverlayBorder from './OverlayBorder';

export default function PostPreview({ post, author }) {
  return (
    <Container>
      <ImageLink to={`/users/${post.blogId}/posts/${post.id}`}>
        <OverlayBorder />
        <img src={`https://cdn-images-1.medium.com/max/800/${post.imgDescriptor}`} alt="blog post cover image" />
      </ImageLink>
      <Content>
        <TextLink to={`/users/${post.blogId}/posts/${post.id}`}>
          <h3>{post.title}</h3>
          <p>{post.subTitle}</p>
        </TextLink>
        <Meta>
          <a
            className="avatar avatar--small avatar--circled"
            href="https://blog.kentcdodds.com/@kentcdodds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={author.avatarUrl} />
          </a>
          <SubMeta>
            <a href="https://blog.kentcdodds.com/@kentcdodds" target="_blank" rel="noopener noreferrer">
              {author.username}
            </a>
            <span>{post.date}</span>
          </SubMeta>
        </Meta>
      </Content>
    </Container>
  );
}

const Container = styled.article`
  margin-bottom: 25px;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;
