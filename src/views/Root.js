import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import UsersProvider from 'providers/UsersProvider';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <UserTemplate>
        <UsersProvider>
          <Switch>
            <Route path="/add-user">
              <AddUser />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </UsersProvider>
      </UserTemplate>
    </ThemeProvider>
  </Router>
);

export default Root;
