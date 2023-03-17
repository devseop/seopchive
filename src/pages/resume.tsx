import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/react';
import Navbar from 'components/Main/Navbar';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import ResumeTemplate from 'components/Resume/resume_template';
import Template from 'components/Common/Template';

type ResumePageProps = {
  location: {
    search: string;
  };
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const ResumeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 768px;
  margin: 0 auto;

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

const ResumePage: FunctionComponent<ResumePageProps> = ({
  location: { search },
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}) => {
  const headLineText =
    '안녕하세요,\n동적인 것을 좋아하는\n정적인 프론트엔드 엔지니어\n이윤섭입니다.';

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
    >
      <Navbar />

      <ResumeWrapper>
        <HeadLine>{headLineText}</HeadLine>
        <ResumeTemplate />
      </ResumeWrapper>
    </Template>
  );
};

export default ResumePage;

export const getTemplate = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }

    file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData(width: 32, height: 32)
      }
      publicURL
    }
  }
`;
