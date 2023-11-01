import React from 'react';
import styled from '@emotion/styled';
import { Item } from './Item';
import { PostListItemType } from '../../types/types';

type ListType = {
  posts: PostListItemType[];
};

const List = ({ posts }: ListType) => {
  return (
    <Container>
      <Title>\ 작성글</Title>
      <PostListWrapper>
        {posts.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <Item {...frontmatter} key={id} link={slug} />
          ),
        )}
      </PostListWrapper>
    </Container>
  );
};

const Container = styled.section`
  width: 1024px;
  margin: 100px auto;
`;

const PostListWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 24px;
  margin-top: 24px;
`;

const Title = styled.p`
  color: #222;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px; /* 100% */
  letter-spacing: -0.96px;
`;

export default List;
