import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type PostItemProps = {
  title: string;
  date: string;
  link: string;
};

export const PostItem = ({ title, date, link }: PostItemProps) => {
  return (
    <Link to={link}>
      <PostItemWrapper>
        <ContentItemHeader>
          <Title>{title}</Title>
        </ContentItemHeader>
        <Date>{date.slice(0, -1)}</Date>
      </PostItemWrapper>
    </Link>
  );
};

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
