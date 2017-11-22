import React, { Component } from 'react';
import Particles from 'react-particles-js';
import config from './config';

import './animations.css';
import './style.css';
import logo from '../../assets/logo/full_white.svg';

class Game extends Component {
  render() {
    return (
      <div>
        <Particles params={config} className="background" />
        <div className="content flex-center">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    );
  }
}

export default Game;
