import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
// Imports all the micro-projects into this main App file.

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};
