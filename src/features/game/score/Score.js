import React, { Component } from 'react';
import './style.css';

class Score extends Component {
  handlePageChange = e => {
    this.props.changePage('highscore');
  };

  render() {
    return (
      <div className="splash">
        <div className="scorewrapper">
          <h1 className="score">{this.props.score}</h1>
          <h3>Score</h3>

          <button className="secondary" onClick={this.handlePageChange}>
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Score;
