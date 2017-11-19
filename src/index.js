import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

import './assets/scss/';
import Grommet from 'grommet/components/App';

ReactDOM.render(
  <Grommet centered={false}>
    <App />
  </Grommet>,
  document.getElementById('root')
);
