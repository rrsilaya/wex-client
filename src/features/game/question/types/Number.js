import React, { Component } from 'react';

class Number extends Component {
  handleAnswer = e => {
    e.preventDefault();
    this.props.answerQuestion(
      this.props.index + 1,
      parseInt(e.target.answer.value)
    );
  };

  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <form onSubmit={this.handleAnswer}>
          <input
            type="number"
            className="primary"
            name="answer"
            placeholder="Answer"
          />
        </form>
      </div>
    );
  }
}

export default Number;
