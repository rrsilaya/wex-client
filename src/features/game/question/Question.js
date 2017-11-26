import React, { Component } from 'react';
import './style.css';

import logo from '../../../assets/logo/white.svg';
import MultipleChoice from './types/MultipleChoice';
import TrueFalse from './types/TrueFalse';
import Number from './types/Number';
import Text from './types/Text';

class Question extends Component {
  render() {
    const { questions, qIndex, qty } = this.props.player;

    const question = questions[qIndex];

    return (
      <div className="question">
        <div className="top">
          <div className="category">
            <span>{question.category}</span>
          </div>
          <div className="counter">
            <span>{qIndex + 1}</span>
            <span>{qty}</span>
          </div>
        </div>
        <div className="center">
          {question.type === 'true_false' ? (
            <TrueFalse {...question} />
          ) : question.type === 'number' ? (
            <Number {...question} />
          ) : question.type === 'text' ? (
            <Text {...question} />
          ) : (
            <MultipleChoice {...question} />
          )}
        </div>

        <div className="bottom">
          <img src={logo} alt="" className="qlogo" />
          <div className="exit">
            <button className="secondary" onClick={this.props.endGame}>
              End Game
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
