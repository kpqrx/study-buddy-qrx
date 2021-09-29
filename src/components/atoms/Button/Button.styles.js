import styled from 'styled-components';

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.gray.xDark};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 700;
  padding: 6px 42px;
  background-color: ${({ theme }) => theme.colors.gray.regular};
  border-radius: 25px;
  margin-top: 32px;
`;
