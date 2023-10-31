import React from 'react';
import styled from '@emotion/styled';

export const Footer = () => {
  return (
    <FooterWrapper>
      Powered By
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        style={{ paddingLeft: '4px', color: '#3680ff' }}
      >
        Gatsby
      </a>
      <br />© younseop lee, All rights reserved
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  place-items: center;
  margin-top: auto;
  padding: 80px 0 48px;
  font-size: 14px;
  text-align: center;
  line-height: 1.45;
  color: rgba(34, 34, 34, 0.4);
`;
