import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
// import ProfileImage from '../Main/ProfileImage';
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

const MenuWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const MenuLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(34, 34, 34, 0.8);
  text-decoration: none;

  :hover {
    color: #f24822;
  }
`;

const Navbar: FunctionComponent<IntroductionProps> = ({ blogLogoImage }) => {
  return (
    <Background>
      <Wrapper>
        {/* <ProfileImage profileImage={profileImage} /> */}
        <BlogLogoImage blogLogoImage={blogLogoImage} />
        <MenuWrapper>
          <MenuLink to="/">Posts</MenuLink>
          {/* <MenuLink to="/resume">Resume</MenuLink> */}
          <MenuLink
            to="https://github.com/devseop/devseop.github.io"
            target="_blank"
          >
            Github
          </MenuLink>
        </MenuWrapper>
      </Wrapper>
    </Background>
  );
};

export default Navbar;
