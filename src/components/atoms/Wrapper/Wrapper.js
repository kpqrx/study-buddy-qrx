import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './Wrapper.styles';

const Wrapper = ({ children, ...rest }) => <StyledContainer {...rest}>{children}</StyledContainer>;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
