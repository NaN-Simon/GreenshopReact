import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';
import './styles/index.scss';

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store = {store}>
    <HashRouter>
      <App />
    </HashRouter>

  </Provider>,
);

