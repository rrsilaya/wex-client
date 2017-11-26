import React, { Component } from 'react';

import './style.css';
import logo from '../../../assets/logo/full_white.svg';

class Splash extends Component {
  render() {
    return (
      <div className="splash">
        <div>
          <img src={logo} alt="" className="logo" />
          <button className="secondary take-challenge">
            Take The Challenge
          </button>
        </div>
      </div>
    );
  }
}

export default Splash;
