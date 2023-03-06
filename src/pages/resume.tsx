import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import Navbar from 'components/Main/Navbar';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ResumeTemplate from 'components/Resume/resume_template';

const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', san-serif;
  }
`;

const ResumeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 768px;
  margin: 80px auto 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 50px 20px;
  }
`;

const HeadLine = styled.h2`
  font-size: 40px;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 1.3;
`;

type ResumePageProps = {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
};

const ResumePage: FunctionComponent<ResumePageProps> = ({
  data: {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  const headLineText =
    '안녕하세요,\n동적인 것을 좋아하는\n정적인 프론트엔드 엔지니어\n이윤섭입니다.';

  return (
    <div>
      <Global styles={globalStyle} />
      <Navbar blogLogoImage={gatsbyImageData} />
      <ResumeWrapper>
        <HeadLine>{headLineText}</HeadLine>
        <ResumeTemplate />
      </ResumeWrapper>
    </div>
  );
};

export default ResumePage;

export const metadataQuery = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData(width: 143, height: 32)
      }
      publicURL
    }
  }
`;
