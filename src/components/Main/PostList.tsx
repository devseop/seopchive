import React from 'react';
import styled from '@emotion/styled';
import { PostItem } from './PostItem';
import { PostListItemType } from '../../types/types';

type PostListType = {
  posts: PostListItemType[];
};

const PostList = ({ posts }: PostListType) => {
  return (
    <PostListWrapper>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} key={id} link={slug} />
        ),
      )}
    </PostListWrapper>
  );
};

const PostListWrapper = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin: 40px 40px 0 0;
  overflow-y: visible;

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export default PostList;
