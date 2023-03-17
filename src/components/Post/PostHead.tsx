import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import PostHeadInfo, { PostHeadInfoProps } from './PostHeadInfo';

type GatsbyImageProps = {
  image: IGatsbyImageData;
  alt: string;
  className?: string;
};

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
};

const PostHeadWrapper = styled.div`
  // position: relative;
  // width: 100%;
  // height: 400px;

  // @media (max-width: 768px) {
  //   height: 300px;
  // }
  display: flex;
  flex-direction: column;
`;

// const BackgroundImage = styled((props: GatsbyImageProps) => (
//   <GatsbyImage {...props} style={{ position: 'absolute' }} />
// ))`
//   // z-index: -1;
//   width: 100%;
//   height: 400px;
//   object-fit: cover;
//   filter: brightness(0.25);

//   @media (max-width: 768px) {
//     height: 300px;
//   }
// `;

const BackgroundImage = styled(GatsbyImage)`
  width: 768px;
  height: 350px;
  object-fit: cover;
  margin: 120px auto 12px;
  border-radius: 16px;

  @media (max-width: 768px) {
    height: 300px;
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
