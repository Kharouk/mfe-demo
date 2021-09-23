import React from 'react';
import ReactDOM from 'react-dom';

console.log('Inside Marketing!');

// Mount function to start up app:
const mount = (el) => {
  ReactDOM.render(<h1>Marketing</h1>, el);
};

// Dev or isolation, call mount immediately:
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-root');
  if (devRoot) mount(devRoot);
}

// we are running through container so export mount:
export { mount };
