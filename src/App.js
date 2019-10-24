import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import routes from './components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        { routes.map(route => <Route {...route} />) }
      </Switch>
    </BrowserRouter>
  );
}

export default App;
