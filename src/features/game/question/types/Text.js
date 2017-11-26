import React, { Component } from 'react';

class Text extends Component {
  handleAnswer = e => {
    e.preventDefault();
    this.props.answerQuestion(this.props.index + 1, e.target.answer.value);
  };

  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <form onSubmit={this.handleAnswer}>
          <input
            type="text"
            className="primary"
            name="answer"
            placeholder="Answer"
          />
        </form>
      </div>
    );
  }
}

export default Text;
