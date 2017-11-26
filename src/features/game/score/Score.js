import React, { Component } from 'react';
import './style.css';

class Score extends Component {
  render() {
    return (
      <div className="splash">
        <div className="scorewrapper">
          <h1 className="score">23</h1>
          <h3>Score</h3>

          <button className="secondary">Continue</button>
        </div>
      </div>
    );
  }
}

export default Score;
