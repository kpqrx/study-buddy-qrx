import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import GlobalStyle from 'assets/styles/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 100vh;
  width: 100vw;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledContainer>
      <UsersList />
    </StyledContainer>
  </ThemeProvider>
);

export default Root;
