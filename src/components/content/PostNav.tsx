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
      <Header>
        <TextWrapper>
          <h1>글</h1>
          <h1>{posts.length}</h1>
        </TextWrapper>
      </Header>
      <ContentWrapper>
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
  display: flex;
  flex-direction: column;
  min-width: 360px;
  max-width: 360px;
  height: 100vh;
  position: sticky;
  top: 0;
  color: white;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px 40px 0 40px;

  img {
    width: 40px;
    height: 40px;
  }
`;

const ContentWrapper = styled.nav`
  padding: 24px 40px 0 28px;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;

  h1 {
    color: #222;
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.72px;
  }
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
    background-color: rgba(254, 254, 254, 0.1);
  }

  a {
    color: rgba(254, 254, 254, 1);
    text-decoration: none;
    line-height: 1.4;

    &:visited {
      color: rgba(254, 254, 254, 1);
      text-decoration: none;
    }
  }
`;

export default PostNav;
