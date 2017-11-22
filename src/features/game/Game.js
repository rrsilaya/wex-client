import React, { Component } from 'react';
import Particles from 'react-particles-js';
import config from './config';

import './stylesheets/animations.css';
import './stylesheets/style.css';
import './stylesheets/defaults.css';
import './stylesheets/helper.css';
import logo from '../../assets/logo/full_white.svg';

class Game extends Component {
  render() {
    return (
      <div>
        <Particles params={config} className="background" />
        <div className="content flex-center">
          <div>
            <img src={logo} alt="" className="logo" />
            {/*
              <input type="text" placeholder="Name" className="primary" />
              <br /><br />
              <button className="primary">
                <span>Start Game</span>
              </button>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
