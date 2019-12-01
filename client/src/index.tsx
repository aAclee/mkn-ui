import React from 'react';
import ReactDOM from 'react-dom';

// CSS Reset
import '@csstools/normalize.css';
import './index.css';

// Root Component
import Root from './components/root';

// Store
import configureStore from './store';

// Modal
import configureModal from '@design/modal';

document.addEventListener('DOMContentLoaded', (): void => {
  configureModal();

  const rootElement = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(<Root store={store} />, rootElement);
});

