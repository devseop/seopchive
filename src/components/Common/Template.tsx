import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import { Footer } from 'components/Common/Footer';
import GlobalStyle from 'components/Common/GlobalStyle';

type TemplateProps = {
  title: string;
  url: string;
  children: ReactNode;
};

const Template = ({
  title,
  // description,
  url,
  // image,
  children,
}: TemplateProps) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="icon" href="favicon.ico" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />

        {/* <meta name="description" content={description} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {/* <meta property="og:description" content={description} /> */}
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        {/* <meta name="twitter:description" content={description} /> */}
        {/* <meta name="twitter:image" content={image} /> */}
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default Template;