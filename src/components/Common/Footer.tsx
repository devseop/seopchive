import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const FooterWrapper = styled.footer`
  place-items: center;
  margin-top: auto;
  padding: 44px 0;
  font-size: 14px;
  text-align: center;
  line-height: 1.45;
  color: rgba(34, 34, 34, 0.4);
  }
`;

const Footer: FunctionComponent = () => {
  return (
    <FooterWrapper>
      Powered By
      <Link
        to="https://www.gatsbyjs.com/"
        target="_blank"
        style={{ paddingLeft: '4px', color: '#3680ff' }}
      >
        Gatsby
      </Link>
      <br />© younseop lee, All rights reserved
    </FooterWrapper>
  );
};

export default Footer;
