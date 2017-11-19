import React, { Component } from 'react';
import './App.css';

import Loader from '../features/session/Loader';

class App extends Component {
  render() {
    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default App;
