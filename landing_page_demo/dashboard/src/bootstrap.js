import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to start up app:
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// Dev or isolation, call mount immediately:
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-root');
  if (devRoot) mount(devRoot);
}

// we are running through container so export mount:
export { mount };
