import React from 'react';
import styled from '@emotion/styled';

type PostNavProps = {
  posts: {
    node: {
      id: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        title: string;
        date: string;
      };
    };
  }[];
};

const PostNav = ({ posts }: PostNavProps) => {
  return (
    <NavContainer>
      <ContentWrapper>
        <Title>작성글</Title>
        <ListWrapper>
          {posts.map(({ node }) => (
            <PostLinkItem key={node.id}>
              <a href={node.fields.slug}>{node.frontmatter.title}</a>
            </PostLinkItem>
          ))}
        </ListWrapper>
      </ContentWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.aside`
  width: 360px;
`;

const ContentWrapper = styled.nav`
  padding: 16px 40px 0 0;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  overflow-y: auto;
  position: sticky;
  top: 94px;
  max-height: calc(100vh - 54px - 40px);

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h1`
  margin: 0 0 16px 12px;
  color: #222;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.72px;
`;

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style-type: none;
`;

const PostLinkItem = styled.li`
  padding: 12px;
  border-radius: 6px;
  filter: grayscale(100%);
  transition: filter 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: none;
    background-color: rgba(0, 0, 0, 0.07);
  }

  a {
    color: #222;
    text-decoration: none;
    line-height: 1.4;

    &:visited {
      color: #222;
      text-decoration: none;
    }
  }
`;

export default PostNav;
