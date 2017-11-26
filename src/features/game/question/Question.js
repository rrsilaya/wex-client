import React, { Component } from 'react';
import './style.css';

import logo from '../../../assets/logo/white.svg';
import MultipleChoice from './types/MultipleChoice';
import TrueFalse from './types/TrueFalse';
import Number from './types/Number';
import Text from './types/Text';

import Spinning from 'grommet/components/icons/Spinning';

class Question extends Component {
  render() {
    const { questions, qIndex, qty } = this.props.player;

    const question = questions[qIndex];

    return qIndex !== qty ? (
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
          {this.props.isAnswering ? (
            <Spinning size="large" />
          ) : question.type === 'true_false' ? (
            <TrueFalse
              {...question}
              answerQuestion={this.props.handleAnswer}
              index={qIndex}
            />
          ) : question.type === 'number' ? (
            <Number
              {...question}
              answerQuestion={this.props.handleAnswer}
              index={qIndex}
            />
          ) : question.type === 'text' ? (
            <Text
              {...question}
              answerQuestion={this.props.handleAnswer}
              index={qIndex}
            />
          ) : (
            <MultipleChoice
              {...question}
              answerQuestion={this.props.handleAnswer}
              index={qIndex}
            />
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
    ) : (
      <div className="question">
        <div />
        <div className="center">
          <button className="secondary" onClick={this.props.endGame}>
            Continue
          </button>
        </div>
        <div />
      </div>
    );
  }
}

export default Question;
