import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/AppContainer';

import './assets/scss/';
import Grommet from 'grommet/components/App';

// Redux
import { Provider } from 'react-redux';
import store from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <Grommet centered={false}>
      <App />
    </Grommet>
  </Provider>,
  document.getElementById('root')
);
