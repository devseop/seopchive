import React from 'react';
import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Navbar from 'components/Main/Navbar';
import PostList from 'components/Main/PostList';
import Template from 'components/Common/Template';
import { PostListItemType } from 'types/PostItem.types';

type IndexPageProps = {
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
    allMarkdownRemark: {
      edges: PostListItemType[];
    };
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
      publicURL: string;
    };
  };
};

const IndexPage = ({
  data: {
    site: {
      siteMetadata: { title, siteUrl },
    },
    allMarkdownRemark: { edges },
  },
}: IndexPageProps) => {
  return (
    <Template title={title} url={siteUrl}>
      <Navbar />
      <PostList posts={edges} />
    </Template>
  );
};

export default IndexPage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
          }
        }
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
