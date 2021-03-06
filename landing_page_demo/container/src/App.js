import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';
// Lazy loads all the micro-projects into this main App file:

// import AuthApp from './components/AuthApp';
const AuthApp = lazy(() => import('./components/AuthApp'));
// import MarketingApp from './components/MarketingApp';
const MarketingApp = lazy(() => import('./components/MarketingApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));

// generates more unique classnames so that we don't have collisions with MUI
const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) history.push('/dashboard');
  }, [isSignedIn]);
  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header
          onSignOut={() => setIsSignedIn(false)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route
              path="/auth"
              render={() => <AuthApp onSignedIn={() => setIsSignedIn(true)} />}
            />
            <Route path="/dashboard">
              {/* Way to redirect user away from dashboard if they are not signed in: */}
              {!isSignedIn && <Redirect to="/" />}
              <DashboardApp />
            </Route>
            <Route path="/" component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};
