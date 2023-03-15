import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export type PostHeadInfoProps = {
  title: string;
  date: string;
  categories: string[];
};

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  // padding: 60px 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 20px;
  }
`;

// const PrevPageIcon = styled.div`
//   display: grid;
//   place-items: center;
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background: #ffffff;
//   color: #000000;
//   font-size: 22px;
//   cursor: pointer;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

//   @media (max-width: 768px) {
//     width: 30px;
//     height: 30px;
//     font-size: 18px;
//   }
// `;

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

// const PostData = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
//   font-size: 18px;
//   font-weight: 700;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     font-size: 15px;
//     font-weight: 400;
//   }
// `;

const CategoryWrapper = styled.div`
  display: flex;
  margin: 24px 0 12px;
`;

const CategoryItem = styled.h6`
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  margin-right: 8px;
  padding: 6px 12px;
  border: 1px solid rgba(34, 34, 34, 0.8);
  border-radius: 16px;

  &:nth-of-type(1) {
    color: #fff;
    background-color: rgba(34, 34, 34, 1);
  }
`;

const PostDate = styled.p`
  font-size: 14px;
  color: rgba(34, 34, 34, 0.6);
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = ({
  title,
  date,
  categories,
}) => {
  // const goBackPage = () => window.history.back();
  return (
    <PostHeadInfoWrapper>
      {/* <PrevPageIcon onClick={goBackPage}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageIcon> */}
      {/* <CategoryWrapper>{categories.join(' | ')}</CategoryWrapper> */}
      <CategoryWrapper>
        {categories.map((category) => (
          <CategoryItem key={category}>{category}</CategoryItem>
        ))}
      </CategoryWrapper>
      <Title>{title}</Title>
      <PostDate>{date}</PostDate>
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
