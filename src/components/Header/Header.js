import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <StyledLogo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 26px 200px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  position: relative;
  display: flex;
  flex-direction: column;
`;

/* Nav is centered regardless of this element */
const StyledLogo = styled(Logo)`
  position: absolute;
  top: 0;
  left: 32px;
  bottom: 3px;
  display: flex;
  align-items: center;  
`

/* Margin auto doesn't center when there's missing space */
const Nav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
