import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';
import './style.css';
class Loader extends Component {
  render() {
    return (
      <div className="full">
        <Box>
          <Spinning size="large" />
        </Box>
      </div>
    );
  }
}

export default Loader;
