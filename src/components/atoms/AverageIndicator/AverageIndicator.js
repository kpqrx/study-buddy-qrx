import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './AverageIndicator.styles';

const AverageIndicator = ({ children, ...rest }) => (
  <StyledContainer {...rest} average={children}>
    {children}
  </StyledContainer>
);

AverageIndicator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AverageIndicator;
