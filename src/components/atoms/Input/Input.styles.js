import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 35px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.gray.dark};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 0 12px;
  transition: box-shadow 0.07s ease-in;

  &:focus {
    outline: none;
    box-shadow: 0 8px 10px -8px hsla(0, 0%, 0%, 25%);
  }
`;
