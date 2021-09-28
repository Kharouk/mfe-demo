import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up app:
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory(); // if local dev, use default BROWSER history

  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (nextPathname !== pathname) history.push(nextPathname);
    },
  };
};

// Dev or isolation, call mount immediately:
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-root');
  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// we are running through container so export mount:
export { mount };
