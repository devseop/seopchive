import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { RiUser5Fill, RiGithubFill } from 'react-icons/ri';

import { HOME_TYPE, NAV_CONSTANTS } from '../../constants/constants';
import { NavIconType } from 'types/types';

const Navbar = () => {
  return (
    <NavContainer>
      <Header>
        <Link to="/">
          <h1>{HOME_TYPE}</h1>
        </Link>
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

const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 40px;
  background-color: #fffef5;
  box-shadow: 0px 1px 0px 0px rgba(34, 34, 34, 0.2);

  position: fixed;
  top: 0;
`;

const Header = styled.div`
  line-height: 1;
  height: fit-content;

  h1 {
    font-weight: 500;
  }

  a {
    text-decoration: none;

    &:visited {
      color: #222;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const MenuLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 4px;

  padding: 4px 16px;

  color: #222;
  text-decoration: none;
  height: fit-content;
  cursor: pointer;

  &:hover {
    color: #3680ff;
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
