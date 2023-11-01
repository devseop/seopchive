import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Template from 'components/common/Template';
import PostNav from 'components/content/PostNav';
import PostHead from 'components/content/PostHead';
import PostContent from 'components/content/PostContent';
import CommentWidget from 'components/content/CommentWidget';

import { PostPageItemType } from '../types/types';

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[];
    };
  };
  pageContext: {
    allPosts: any[];
  };
  location: {
    href: string;
  };
};

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { allPosts },
  location: { href },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: { title, date },
    },
  } = edges[0];

  console.log('post_template', allPosts);

  return (
    <Template title={title} url={href}>
      <PostNav posts={allPosts} />
      <Container>
        <PostHead title={title} date={date} />
        <PostContent html={html} />
        <CommentWidget />
      </Container>
    </Template>
  );
};

const Container = styled.article`
  min-width: 1440px;
  max-width: 1440px;
  padding: 80px 0;
  margin-left: 14px;
`;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          tableOfContents
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD.")
          }
        }
      }
    }
  }
`;

export default PostTemplate;
