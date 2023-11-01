import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Template from 'components/common/Template';
import PostNav from 'components/content/PostNav';
import Content from 'components/content/Content';
import CommentWidget from 'components/content/CommentWidget';

import { PostPageItemType } from '../types/types';
import TableOfContents from 'components/content/TableOfContents';

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
      id,
      html,
      tableOfContents,
      frontmatter: { title, date },
    },
  } = edges[0];

  // console.log('post_template', allPosts);

  //TODO: 이전글/다음글 컴포넌트 추가
  // 현재글의 id와 allPosts의 아이디를 비교 > allposts에서 해당 인덱스를 찾으면 > 그 인덱스를 기준으로 -1, +1의 인덱스를 저장해서 컴포넌트에 뿌리기

  return (
    <Template title={title} url={href}>
      <Container>
        <PostNav posts={allPosts} />
        <ContentWrapper>
          <Content title={title} date={date} html={html} />
          <CommentWidget />
        </ContentWrapper>
        <TableOfContents content={tableOfContents} />
      </Container>
    </Template>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px auto;
  max-width: 1440px;
`;

const ContentWrapper = styled.main`
  max-width: 644px;
`;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
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
