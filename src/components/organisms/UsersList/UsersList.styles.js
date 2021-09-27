import styled from 'styled-components';

export const StyledContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 27px 44px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;
