import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

type ItemProps = {
  title: string;
  date: string;
  link: string;
};

export const Item = ({ title, date, link }: ItemProps) => {
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
  gap: 8px;
  /* padding: 24px 0; */

  cursor: pointer;

  &:hover {
    h2 {
      color: #2f7aea;
    }
  }
`;

const Title = styled.h2`
  color: #222;
  font-size: 24px;
  font-weight: 400;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.span`
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  font-weight: 400;
`;
