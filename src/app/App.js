import React, { Component } from 'react';
import './App.css';

import Button from 'grommet/components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Button primary label="Click Me" href="#" />
      </div>
    );
  }
}

export default App;
