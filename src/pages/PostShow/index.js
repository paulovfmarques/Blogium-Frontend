import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/shared/Spinner';
import PreContent from '../../components/shared/PreContent';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostText from './PostText';
import posts from '../../../data/posts';

export default function PostShow() {
  const { postId } = useParams();
  const author = {
    username: 'joe-doe',
    avatarUrl: 'https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/19/avatar',
    bio:
      'Jon Doe Murray is a 28-year-old management consultant who enjoys reading, planking and watching sport. He is friendly and generous, but can also be very unkind and a bit standoffish.',
  };
  const post = posts.find((p) => p.id == postId);

  return (
    <main>
      <PreContent />
      <article>
        <section>
          <PostImage post={post} />
          <PostText post={post} />
        </section>
        <PostHeader post={post} author={author} />
      </article>
    </main>
  );
}
