import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
// Imports all the micro-projects into this main App file.
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';

// generates more unique classnames so that we don't have collisions with MUI
const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={MarketingApp} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};
