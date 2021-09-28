import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
import Progress from './components/Progress';
// Lazy loads all the micro-projects into this main App file:

// import AuthApp from './components/AuthApp';
const AuthApp = lazy(() => import('./components/AuthApp'));
// import MarketingApp from './components/MarketingApp';
const MarketingApp = lazy(() => import('./components/MarketingApp'));

// generates more unique classnames so that we don't have collisions with MUI
const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};
