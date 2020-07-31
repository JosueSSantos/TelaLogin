import React from 'react';
import Login from './pages/Login';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  )
};
export default Routes;