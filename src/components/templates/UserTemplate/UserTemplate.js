import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledContentContainer } from './UserTemplate.styles';
import SideMenu from 'components/organisms/SideMenu/SideMenu';

const UserTemplate = ({ children }) => (
  <StyledContainer>
    <SideMenu />
    <StyledContentContainer>{children}</StyledContentContainer>
  </StyledContainer>
);

UserTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserTemplate;
