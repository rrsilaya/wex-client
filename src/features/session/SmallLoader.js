import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import './style.css';

class Loader extends Component {
  render() {
    return (
      <div className="partial">
        <Box>
          <Spinning size="medium" />
        </Box>
      </div>
    );
  }
}

export default Loader;
