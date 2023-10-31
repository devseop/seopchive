import React from 'react';
import styled from '@emotion/styled';
import { PostItem } from './PostItem';
import { PostListItemType } from '../../types/PostItem.types';

type PostListType = {
  posts: PostListItemType[];
};

const PostList = ({ posts }: PostListType) => {
  console.log(posts);

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
  flex-direction: column;
  gap: 16px;
  width: 816px;
  margin: 120px auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    /* padding: 50px 20px; */
  }
`;

export default PostList;
