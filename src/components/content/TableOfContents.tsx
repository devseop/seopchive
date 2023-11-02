import styled from '@emotion/styled';

const TableOfContents = ({ content }: { content: string }) => {
  // const clickRemoveUrlStringHandler = (
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  // ) => {
  //   if (e.target && (e.target as HTMLElement).tagName === 'A') {
  //     e.preventDefault();
  //   }
  // };

  return (
    <Container>
      <StyledToc
        dangerouslySetInnerHTML={{ __html: content }}
        // onClick={clickRemoveUrlStringHandler}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 360px;
`;

const StyledToc = styled.div`
  padding: 16px 0 0 40px;
  opacity: 0.3;
  transition: opacity 0.2s ease-in-out;
  overflow-y: auto;
  position: sticky;
  top: 94px;
  max-height: calc(100vh - 54px - 40px);

  &:hover {
    opacity: 1;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style-type: none;
  }

  li {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  p {
    padding: 12px;
    border-radius: 6px;
    color: #222;
    text-decoration: none;
    line-height: 1.4;
    filter: grayscale(100%);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: none;
      background-color: rgba(0, 0, 0, 0.07);
    }

    a {
      padding: 0;
      border-radius: 0;
      background-color: transparent;
      filter: none;
      transition: none;

      &:hover {
        background-color: transparent;
      }
    }
  }

  a {
    padding: 12px;
    border-radius: 6px;
    color: #222;
    text-decoration: none;
    line-height: 1.4;
    filter: grayscale(100%);
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: none;
      background-color: rgba(0, 0, 0, 0.07);
    }

    &:visited {
      color: #222;
      text-decoration: none;
    }
  }
`;

export default TableOfContents;
