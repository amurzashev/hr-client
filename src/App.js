import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './utils/theme';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './components/pages';
import Nav from './components/organisms/Nav';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Nav />
        <Switch>
          { routes.map(route => <Route {...route} />) }
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
