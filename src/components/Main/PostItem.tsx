import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItemWrapper = styled.article`
  // wrapper layout style
  display: flex;
  cursor: pointer;
  padding: 24px;
  border-radius: 16px;

  &:hover {
    background-color: rgba(34, 34, 34, 0.05);
  }

  &:active {
    background-color: rgba(34, 34, 34, 0.1);
  }

  // content item layout style
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;
`;

const ContentItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 28px;
  font-weight: 700;
  color: #222;
`;

const Date = styled.h6`
  font-size: 14px;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.4);
`;

const CategoryItem = styled.h6`
  font-size: 14px;
  font-weight: 400;
  margin-right: 8px;
  padding: 6px 12px;
  border: 1px solid rgba(34, 34, 34, 0.8);
  border-radius: 16px;

  &:nth-of-type(1) {
    color: #fff;
    background-color: rgba(34, 34, 34, 1);
  }
`;

const Summary = styled.h5`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.7);
`;

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  link,
}) => {
  return (
    <Link to={link}>
      <PostItemWrapper>
        <ContentItemHeader>
          <div style={{ display: 'flex' }}>
            {categories.map((category) => (
              <CategoryItem key={category}>{category}</CategoryItem>
            ))}
          </div>
          <Title>{title}</Title>
        </ContentItemHeader>
        <Summary>{summary}</Summary>
        <Date>{date.slice(0, -1)}</Date>
      </PostItemWrapper>
    </Link>
  );
};

export default PostItem;
