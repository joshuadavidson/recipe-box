/* establish global variables for ESLint */
/* global document */

// Material-UI depends on react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';

// React Components
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// Theme Imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import appTheme from './appTheme';

// import custom styles for project
import './index.scss';

// Setup the react-tap-event-plugin for Material-UI
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(appTheme)}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('app'),
);
