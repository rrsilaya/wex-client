import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';

import './style.css';

class Loader extends Component {
  render() {
    return (
      <div className="full">
        <Spinning size="large" />
      </div>
    );
  }
}

export default Loader;
