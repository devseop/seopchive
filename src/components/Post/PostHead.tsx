import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

const PostHeadWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled(GatsbyImage)`
  width: 768px;
  height: 350px;
  object-fit: cover;
  margin: 120px auto 12px;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: calc(100vw - 32px);
    height: 220px;
  }
`;

const PostHead: FunctionComponent<PostHeadProps> = ({
  title,
  date,
  categories,
  thumbnail,
}) => {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  );
};

export default PostHead;
