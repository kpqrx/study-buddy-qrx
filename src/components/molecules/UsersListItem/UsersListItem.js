import React, { useContext } from 'react';
import { Context as ctx } from 'providers/UsersProvider';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledButtonsWrapper,
  StyledAverageIndicator,
  StyledParagraph,
} from './UsersListItem.styles';
import IconButton from 'components/atoms/IconButton/IconButton';

const UsersListItem = ({ data: { fullName, average, attendance = 0 } }) => {
  const { handleDelete } = useContext(ctx);

  return (
    <StyledContainer>
      <StyledAverageIndicator>{average}</StyledAverageIndicator>
      <StyledParagraph fontSize="l" isBold>
        {fullName}
      </StyledParagraph>
      <StyledParagraph>Attendance: {attendance}%</StyledParagraph>
      <StyledButtonsWrapper>
        <IconButton tooltipText="asdf asd as as asdf" onClick={() => handleDelete(fullName)} />
      </StyledButtonsWrapper>
    </StyledContainer>
  );
};

UsersListItem.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    average: PropTypes.number.isRequired,
    attendance: PropTypes.number,
  }),
};

export default UsersListItem;
