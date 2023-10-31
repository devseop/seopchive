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
        <Title>{title}</Title>
        <Date>{date.slice(0, -1)}</Date>
      </PostItemWrapper>
    </Link>
  );
};

const PostItemWrapper = styled.article`
  // wrapper layout style
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 24px;

  // content item layout style
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: auto;

  cursor: pointer;

  &:hover {
    h2 {
      color: #2f7aea;
    }
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 28px;
  font-weight: 600;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 400;
`;
