import React from 'react';
import {
  StyledContainer,
  StyledLogoImage,
  StyledNavContainer,
  StyledNavItem,
} from './SideMenu.styles';

const SideMenu = () => (
  <StyledContainer>
    <StyledLogoImage />
    <StyledNavContainer>
      <StyledNavItem to="/" exact>
        Dashboard
      </StyledNavItem>
      <StyledNavItem to="/add-user">Add user</StyledNavItem>
    </StyledNavContainer>
  </StyledContainer>
);

export default SideMenu;
