import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './utils/theme';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './components/pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          { routes.map(route => <Route {...route} />) }
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
