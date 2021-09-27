import React from 'react';
import PropTypes from 'prop-types';
import { StyledParagraph } from './Paragraph.styles';

const Paragraph = ({ children, fontSize = 's', isBold = false, ...rest }) => (
  <StyledParagraph {...rest} fontSize={fontSize} isBold={isBold}>
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  isBold: PropTypes.bool,
};

export default Paragraph;
