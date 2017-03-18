/* establish global variables for ESLint */
/* global document */

// handle tap events
import injectTapEventPlugin from 'react-tap-event-plugin';

// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Setup the react-tap-event-plugin for Material-UI
injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
