import React from 'react';
import Logo from '@/atoms/logo';
import NavList from '@/molecules/nav-list';
import NavActionsList from '@/molecules/nav-actions-list';
import { StyledHeader } from '@/organisms/header/header.styles';

function Header() {
  return (
    <StyledHeader>
      <Logo />

      <NavList />

      <NavActionsList />

    </StyledHeader>
  );
}
export default Header;
