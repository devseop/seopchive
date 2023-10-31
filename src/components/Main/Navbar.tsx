import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { RiUser5Fill, RiGithubFill } from 'react-icons/ri';

import { INTRODUCE_PARAGRAPH, NAV_CONSTANTS } from '../../constants/constants';
import { NavIconType } from 'types/types';

const Navbar = () => {
  return (
    <NavContainer>
      <Header>
        <Link to="/">
          <img src="/logo.png" alt="로고" />
        </Link>
        <TextWrapper>
          <h1>이윤섭</h1>
          <p>{INTRODUCE_PARAGRAPH}</p>
        </TextWrapper>
      </Header>
      <Nav>
        {NAV_CONSTANTS.map((item, index) => (
          <MenuLink key={index} href={item.link} target="_blank">
            {item.icon && <IconWrapper>{NAV_ICONS[item.icon]}</IconWrapper>}
            <MenuText>{item.text}</MenuText>
          </MenuLink>
        ))}
      </Nav>
    </NavContainer>
  );
};

/** 문자로 제공된 아이콘을 컴포넌트로 변환 */
const NAV_ICONS: NavIconType = {
  RiUser5Fill: <RiUser5Fill />,
  RiGithubFill: <RiGithubFill />,
};

const NavContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 360px;
  max-width: 360px;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 40px;

  img {
    width: 40px;
    height: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    color: rgba(254, 254, 254, 1);
    font-size: 36px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.72px;
  }

  p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 16px;
    font-weight: 500;
    line-height: 22.4px;
    white-space: pre-line;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

const MenuLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 4px;

  width: 280px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  color: rgba(254, 254, 254, 1);
  text-decoration: none;
  height: fit-content;
  cursor: pointer;

  &:last-child {
    color: rgba(254, 254, 254, 0.4);
    border-bottom: none;
  }
`;

const IconWrapper = styled.div`
  font-size: 20px;
`;

const MenuText = styled.span`
  line-height: 1;
  margin-top: 3px;
`;

export default Navbar;
