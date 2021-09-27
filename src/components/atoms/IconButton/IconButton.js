import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';
import { StyledButton, StyledTooltip } from './IconButton.styles';

const IconButton = ({ tooltipText = null, ...rest }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleTooltipVisibility = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  return (
    <StyledButton
      {...rest}
      onMouseOver={handleTooltipVisibility}
      onMouseLeave={handleTooltipVisibility}
    >
      <DeleteIcon />
      {tooltipText && (
        <StyledTooltip isTooltipVisible={isTooltipVisible}>{tooltipText}</StyledTooltip>
      )}
    </StyledButton>
  );
};

IconButton.propTypes = {
  tooltipText: PropTypes.string,
};

export default IconButton;
