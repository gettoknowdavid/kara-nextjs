import React from 'react';
import { useSelector } from 'react-redux';
import { selectGlobal } from '@/slices/global.slice';
import { StyledNavList } from './nav-list.styles';
import NavItem from '@/atoms/nav-item';

function NavList() {
  const globalRepo = useSelector(selectGlobal);
  const { categories } = globalRepo.globalSettings;

  return (
    <StyledNavList>
      {categories.map((category) => (
        <NavItem key={category.id} category={category} />
      ))}
    </StyledNavList>
  );
}

export default NavList;
