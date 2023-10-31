import React from 'react';
import styled from '@emotion/styled';

type PostHeadProps = {
  title: string;
  date: string;
};

const PostHead = ({ title, date }: PostHeadProps) => {
  return (
    <PostHeadWrapper>
      <PostHeadInfoWrapper>
        <Title>{title}</Title>
        <PostDate>{date}</PostDate>
      </PostHeadInfoWrapper>
    </PostHeadWrapper>
  );
};

const PostHeadWrapper = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 160px;
`;

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

const Title = styled.div`
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

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PostDate = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.6);
`;

export default PostHead;
