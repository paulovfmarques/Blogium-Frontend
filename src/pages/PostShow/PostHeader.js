import React from 'react';
import styled from 'styled-components';
import Avatar from '../../components/shared/Avatar';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

export default function PostHeader({ post }) {
  const { author } = post;
  const readTimeEstimateInMinutes = Math.ceil(post.content.split(' ').length / 150);

  return (
    <Container>
      <Avatar big circled href="https://blog.kentcdodds.com/@kentcdodds" avatarUrl={author.avatarUrl} />
      <Text>
        <Title>
          <Link to={`/users/${author.id}`}>{author.username}</Link>
        </Title>
        <Description>{author.biography}</Description>
        <Meta>
          {dayjs(post.publishAt).format('DD/MM/YYYY HH:MM')} · {readTimeEstimateInMinutes} MIN
        </Meta>
      </Text>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  margin: 0 auto;
  padding: 20px 20px 10px;
  max-width: 740px;

  :global(.avatar) {
    flex: 0 0 auto;
    align-self: center;
  }

  @media (min-width: 768px) {
    padding-top: 35px;
  }
`;

const Text = styled.div`
  flex: 1 1 auto;
  padding-left: 15px;
  font-size: 16px;
  line-height: 20px;
`;

const Title = styled.div`
  a {
    color: var(--color-font-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.div`
  color: var(--color-font-secondary);
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Meta = styled.div`
  color: var(--color-font-secondary);
`;
