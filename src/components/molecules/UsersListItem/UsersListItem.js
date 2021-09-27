import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledButtonsWrapper,
  StyledAverageIndicator,
  StyledParagraph,
} from './UsersListItem.styles';
import IconButton from 'components/atoms/IconButton/IconButton';

const UsersListItem = ({ data: { fullName, average, attendance = 0 }, deleteFn }) => (
  <StyledContainer>
    <StyledAverageIndicator>{average}</StyledAverageIndicator>
    <StyledParagraph fontSize="l" isBold>
      {fullName}
    </StyledParagraph>
    <StyledParagraph>Attendance: {attendance}%</StyledParagraph>
    <StyledButtonsWrapper>
      <IconButton tooltipText="asdf asd as as asdf" onClick={() => deleteFn(fullName)} />
    </StyledButtonsWrapper>
  </StyledContainer>
);

UsersListItem.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
    attendance: PropTypes.number,
  }),
  deleteFn: PropTypes.func.isRequired,
};

export default UsersListItem;
