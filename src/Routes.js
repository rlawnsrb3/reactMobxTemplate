import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import MainContainer from './main/container/MainContainer';

const Routes = () => (
  <BrowserRouter basename="/">
    <Switch>
      <Redirect exact from="/" to="/main" />
      <Route
        exact
        path="/main"
        render={(props) => <MainContainer {...props} />}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
