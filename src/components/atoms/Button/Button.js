import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children, ...rest }) => <StyledButton {...rest}>{children}</StyledButton>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
