import styled from '@emotion/styled';

const TableOfContents = ({ content }: { content: string }) => {
  return <StyledToc dangerouslySetInnerHTML={{ __html: content }} />;
};

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
  }
`;

export default TableOfContents;
