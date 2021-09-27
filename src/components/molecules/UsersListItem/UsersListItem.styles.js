import styled from 'styled-components';
import AverageIndicator from 'components/atoms/AverageIndicator/AverageIndicator';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export const StyledAverageIndicator = styled(AverageIndicator)`
  grid-row: 1 / 3;
`;

export const StyledContainer = styled.li`
  display: grid;
  grid-template-columns: 34px 1fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  column-gap: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  align-items: center;
  padding: 30px 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  padding: 12px 28px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  grid-row: 1 / 3;
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.colors.darkGrey};
  grid-column: 2 / 3;

  &:nth-of-type(1) {
    grid-row: 1 / 2;
    align-self: end;
  }

  &:nth-of-type(2) {
    grid-row: 2 / 3;
    align-self: start;
  }
`;
