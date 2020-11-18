import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import PreContent from '../../components/shared/PreContent';
import AuthorInfo from './AuthorInfo';
import PostImage from './PostImage';
import PostText from './PostText';
import Claps from './Claps';
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

  function onEditButtonClick() {
    history.push(`/posts/${postId}/edit`);
  }

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
        .catch(() => {
          alert('Operation did not succeed');
        });
    }
  }

  if (!post) return <Spinner />;

  const isAdmin = user && user.id === post.author.id;

  return (
    <main>
      <PreContent />
      <article>
        <section>
          <PostImage coverUrl={post.coverUrl} />
          <EditionContainer isAdmin={isAdmin}>
            {user && <Claps post={post} />}
            {isAdmin && (
              <div>
                <Button
                  style={{ color: 'orange', borderColor: 'orange' }}
                  onClick={onEditButtonClick}
                  style={{ marginRight: 10 }}
                >
                  Edit
                </Button>
                <Button style={{ color: 'red', borderColor: 'red' }} onClick={onDeleteButtonClick}>
                  Delete
                </Button>
              </div>
            )}
          </EditionContainer>
          <PostText post={post} />
        </section>
        <AuthorInfo post={post} />
      </article>
    </main>
  );
}

const EditionContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px 40px;
  max-width: 740px;
  display: flex;
  align-items: center;
  ${({ isAdmin }) => (isAdmin ? 'justify-content: space-between' : 'justify-content: flex-start')}
`;
