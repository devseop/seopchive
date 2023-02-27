import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import PostItem from './PostItem';
import { PostListItemType } from '../../types/PostItem.types';
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll';

type PostListType = {
  selectedCategory: string;
  posts: PostListItemType[];
};

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 768px;
  margin: 80px auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const PostList: FunctionComponent<PostListType> = ({
  selectedCategory,
  posts,
}) => {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
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

export default PostList;
