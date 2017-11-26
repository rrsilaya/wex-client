import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <input type="text" className="primary" placeholder="Answer" />
      </div>
    );
  }
}

export default Text;
