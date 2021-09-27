import styled from 'styled-components';

export const StyledContainer = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-weight: 700;
  background-color: ${({ theme, average }) =>
    theme.colors[average <= 3 ? 'error' : average < 4 ? 'warning' : 'success']};
`;
