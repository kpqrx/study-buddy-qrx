import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin-bottom: 9px;
  color: ${({ theme }) => theme.colors.gray.xDark};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;
