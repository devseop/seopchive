import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { PostFrontmatterType } from 'types/PostItem.types';

type PostItemProps = PostFrontmatterType & { link: string };

const PostItemWrapper = styled.article`
  display: flex;
  // transition: 0.3s box-shadow;
  cursor: pointer;

  &:hover {
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

const ThumbnailImage = styled(GatsbyImage)`
  width: 200px;
  height: 200px;
  border-radius: 16px;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-left: 40px;
`;

const Title = styled.h2`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 16px;
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
  font-size: 13px;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.4);
`;

const Category = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const CategoryItem = styled.h6`
  font-size: 13px;
  font-weight: 500;
  color: #f24822;
  margin-right: 8px;
`;

const Summary = styled.h5`
  display: -webkit-box;
  overflow: hidden;
  margin-bottom: 12px;
  text-overflow: ellipsis;
  line-height: 1.4;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  font-weight: 400;
  color: rgba(34, 34, 34, 0.7);
`;

const PostItem: FunctionComponent<PostItemProps> = ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
  link,
}) => {
  return (
    <Link to={link}>
      <PostItemWrapper>
        <ThumbnailImage image={gatsbyImageData} alt="포스트 이미지" />
        <PostItemContent>
          <Category>
            {categories.map((category) => (
              <CategoryItem key={category}>{category}</CategoryItem>
            ))}
          </Category>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <Date>{date.slice(0, -1)}</Date>
        </PostItemContent>
      </PostItemWrapper>
    </Link>
  );
};

export default PostItem;
