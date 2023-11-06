import React from 'react';
import { Global, css } from '@emotion/react';

const defaultStyle = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard', san-serif;
  }

  html,
  body,
  #___gatsby {
  }

  body {
    background: #fff;
  }

  a,
  a:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
