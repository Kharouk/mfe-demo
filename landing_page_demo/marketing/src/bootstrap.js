import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up app:
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

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
  const devRoot = document.querySelector('#_marketing-root');
  if (devRoot) mount(devRoot, {});
}

// we are running through container so export mount:
export { mount };
