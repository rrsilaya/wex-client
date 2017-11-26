import React, { Component } from 'react';

class TrueFalse extends Component {
  handleAnswer = e => {
    this.props.answerQuestion(
      this.props.index + 1,
      e.target.dataset.choice === 'true'
    );
  };

  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <div className="truefalse">
          <button
            className="primary"
            data-choice="true"
            onClick={this.handleAnswer}
          >
            <span>True</span>
          </button>
          <button
            className="primary"
            data-choice="false"
            onClick={this.handleAnswer}
          >
            <span>False</span>
          </button>
        </div>
      </div>
    );
  }
}

export default TrueFalse;
