import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PreContent from '../../components/shared/PreContent';
import AuthorInfo from './AuthorInfo';
import PostImage from './PostImage';
import PostText from './PostText';
import Spinner from '../../components/shared/Spinner';
import axios from 'axios';

export default function PostShow() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        history.push('/');
        alert('Post não encontrado :/');
      });
  }, []);

  if (!post) return <Spinner />;

  return (
    <main>
      <PreContent />
      <article>
        <section>
          <PostImage coverUrl={post.coverUrl} />
          <PostText post={post} />
        </section>
        <AuthorInfo post={post} />
      </article>
    </main>
  );
}
