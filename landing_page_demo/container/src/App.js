import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
// Imports all the micro-projects into this main App file.

// generates more unique classnames so that we don't have collisions with MUI
const generateClassName = createGenerateClassName({
  productionPrefix: 'cont',
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
