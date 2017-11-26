import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="splash">
        <div>
          <input type="text" placeholder="Name" className="primary" />
          <input
            type="number"
            placeholder="Questions"
            className="primary"
            min="3"
          />
          <br />
          <br />
          <button className="primary">
            <span>Start Game</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
