import React, { Component } from 'react';

class TrueFalse extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <div className="truefalse">
          <button className="primary">
            <span>True</span>
          </button>
          <button className="primary">
            <span>False</span>
          </button>
        </div>
      </div>
    );
  }
}

export default TrueFalse;
