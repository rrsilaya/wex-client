import React, { Component } from 'react';

class Number extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <input type="number" className="primary" placeholder="Answer" />
      </div>
    );
  }
}

export default Number;
