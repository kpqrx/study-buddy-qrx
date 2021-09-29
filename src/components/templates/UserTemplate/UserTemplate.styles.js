import styled from 'styled-components';

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const StyledContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-left: 150px;
  background-color: ${({ theme }) => theme.colors.gray.xLight};
`;
