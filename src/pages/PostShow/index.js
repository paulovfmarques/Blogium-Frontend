import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import PreContent from '../../components/shared/PreContent';
import AuthorInfo from './AuthorInfo';
import PostImage from './PostImage';
import PostText from './PostText';
import Spinner from '../../components/shared/Spinner';
import Button from '../../components/shared/Button';
import axios from 'axios';
import { useUserContext } from '../../contexts/UserContext';

export default function PostShow() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const { user } = useUserContext();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch(() => {
        history.push('/');
        alert('Post not found :/');
      });
  }, []);

  function onDeleteButtonClick() {
    const shouldDelete = confirm('Do you really want to delete this post? (This operation is irreversible)');
    if (shouldDelete) {
      axios
        .delete(`http://localhost:3000/api/posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((_response) => {
          alert('The post was deleted (╯°□°)╯︵ ┻━┻');
          history.push('/');
        })
        .catch((error) => {
          alert('Operation did not succeed');
        });
    }
  }

  if (!post) return <Spinner />;

  return (
    <main>
      <PreContent />
      <article>
        <section>
          <PostImage coverUrl={post.coverUrl} />
          {user && user.id === post.author.id && (
            <ButtonContainer>
              <Button style={{ color: 'orange', borderColor: 'orange' }}>Edit</Button>
              <Button style={{ color: 'red', borderColor: 'red' }} onClick={onDeleteButtonClick}>
                Delete
              </Button>
            </ButtonContainer>
          )}
          <PostText post={post} />
        </section>
        <AuthorInfo post={post} />
      </article>
    </main>
  );
}

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px 40px;
  max-width: 740px;

  button {
    margin-right: 10px;
  }
`;
