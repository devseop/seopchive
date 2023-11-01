import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import GlobalStyle from '../../style/GlobalStyle';

type TemplateProps = {
  title: string;
  url: string;
  children: ReactNode;
};

const Template = ({ title, url, children }: TemplateProps) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      {/* <Footer /> */}
    </Container>
  );
};

const Container = styled.main``;

export default Template;
