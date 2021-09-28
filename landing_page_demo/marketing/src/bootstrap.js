import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up app:
const mount = (el) => {
  const history = createMemoryHistory();

  ReactDOM.render(<App history={history} />, el);
};

// Dev or isolation, call mount immediately:
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-root');
  if (devRoot) mount(devRoot);
}

// we are running through container so export mount:
export { mount };
