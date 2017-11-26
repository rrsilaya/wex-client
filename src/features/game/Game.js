import React, { Component } from 'react';
import Particles from 'react-particles-js';
import config from './config';

import './stylesheets/animations.css';
import './stylesheets/style.css';
import './stylesheets/defaults.css';
import './stylesheets/helper.css';

import Question from './question/Question';
import Splash from './splash/Splash';
import Register from './register/Register';

class Game extends Component {
  render() {
    return (
      <div className="game">
        <Particles params={config} className="background" />
        <div className="content">
          <div>
            <Splash />
            {/*
            <Register />
            <Question />
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
