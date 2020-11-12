import styled from 'styled-components';

const Posts = styled.div`
  margin: 0 auto;
  padding: 30px 20px 40px;
  max-width: 1040px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, [col-start] 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 30px;
    padding-bottom: 55px;
  }
`;

export default Posts;
