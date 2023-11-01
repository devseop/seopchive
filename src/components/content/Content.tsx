import React from 'react';
import styled from '@emotion/styled';

interface PostContentProps {
  title: string;
  date: string;
  html: string;
}

const Content = ({ title, date, html }: PostContentProps) => {
  //* React는 XSS 공격을 막기 위해 렌더링 메소드 내부에서 html 태그가 담겨있는 string 형태를 렌더링하면,
  //* 태그가 적용되지 않고 문자열 그대로 렌더링 된다.
  //* dangerouslySetInnerHTML은 이러한 취약점이 있다는 것을 알고 사용해야 한다.

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <PostDate>{date}</PostDate>
      </Container>
      <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  min-width: 644px;
  max-width: 644px;
  margin: 0 auto;
`;

const Title = styled.h2`
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
  color: #222;
`;

const PostDate = styled.p`
  font-size: 14px;
  color: #222;
`;

const MarkdownRenderer = styled.article`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 644px;
  margin: 0 auto;
  padding: 64px 0;
  word-break: break-all;
  color: #222;

  // Markdown Style
  line-height: 1.5;
  font-size: 17px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    padding: 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 700;
    margin-bottom: 16px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 40px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 32px;
  }

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 32px 0;
    padding: 20px 32px 20px;
    border-left: 4px solid #4263eb;
    font-weight: 400;
    background: rgba(34, 34, 34, 0.05);
    line-height: 1.5;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    // padding: 30px 0;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 0.5px solid rgba(34, 34, 34, 0.5);
    margin: 64px 0;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Talbe Style
  table {
    margin: 24px 0;
    // padding: 12px 16px;
    background-color: rgba(34, 34, 34, 0.05);
    border: 0.5px solid rgba(34, 34, 34, 0.3);
    font-size: 14px;
    width: fit-content;
    min-width: 40%;
    max-width: 100%;
    border-collapse: collapse;
    box-sizing: inherit;
  }

  th {
    padding: 8px;
    border-bottom: 3px solid rgba(34, 34, 34, 0.3);
  }

  td {
    padding: 8px;
  }

  table td + td,
  table th + th {
    border-left: 0.5px solid rgba(34, 34, 34, 0.3);
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 16px 0;
    padding: 16px 20px;
    font-size: 14px;
    border-radius: 10px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  pre > code {
    font-family: 'JetBrains Mono';

    // Code Block Style
    .token.function {
      color: #b392f0;
    }

    .token.keyword,
    .token.operator {
      color: #f97583;
    }

    .token.string,
    .token.constant,
    .token.boolean,
    .token.number {
      color: #9ecbff;
    }

    .token.parameter {
      color: #ffab70;
    }

    .token.literal-property.property {
      color: #fff;
    }
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 644px;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    h4 {
      font-size: 17px;
      font-weight: 500;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

export default Content;
