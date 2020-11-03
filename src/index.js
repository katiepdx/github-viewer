import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
// import store for entire app to use 
import store from './store.js'
import { Provider } from 'react-redux'


// wrap app in react-redux provider so it has global access to store
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
