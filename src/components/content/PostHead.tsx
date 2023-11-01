import React from 'react';
import styled from '@emotion/styled';

type PostHeadProps = {
  title: string;
  date: string;
};

const PostHead = ({ title, date }: PostHeadProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <PostDate>{date}</PostDate>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  min-width: 644px;
  max-width: 644px;
  margin: 0 auto;
`;

const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
  color: rgba(254, 254, 254, 1);
`;

const PostDate = styled.p`
  font-size: 14px;
  color: rgba(254, 254, 254, 1);
`;

export default PostHead;
