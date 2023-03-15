import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import BlogLogoImage from './BlogLogoImage';
import { Link } from 'gatsby';

export type IntroductionProps = {
  // profileImage?: IGatsbyImageData;
  blogLogoImage: IGatsbyImageData;
};

const Background = styled.header`
  width: 100%;
  color: #ffffff;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 768px;
  margin: 16px auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`;

const WordMark = styled.span`
  color: rgba(34, 34, 34, 1);
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.5px;
  margin-left: 10px;
  margin-top: -2px;
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 24px;
  height: 32px;
  align-items: center;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.8);
  text-decoration: none;
  height: fit-content;

  :hover {
    color: rgba(34, 34, 34, 0.8);
    box-shadow: 0 1.5px 0 0 rgba(34, 34, 34, 0.8);
  }
`;

const Navbar: FunctionComponent<IntroductionProps> = ({ blogLogoImage }) => {
  return (
    <Background>
      <Wrapper>
        {/* <ProfileImage profileImage={profileImage} /> */}
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BlogLogoImage blogLogoImage={blogLogoImage} />
            <WordMark>devseop</WordMark>
          </div>
        </Link>
        <MenuWrapper>
          {/* <MenuLink to="/">Posts</MenuLink> */}
          {/* <MenuLink to="/resume">Resume</MenuLink> */}
          <MenuLink to="https://github.com/devseop/" target="_blank">
            Github
          </MenuLink>
        </MenuWrapper>
      </Wrapper>
    </Background>
  );
};

export default Navbar;
