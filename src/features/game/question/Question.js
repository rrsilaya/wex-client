import React, { Component } from 'react';
import './style.css';

import logo from '../../../assets/logo/white.svg';
import MultipleChoice from './types/MultipleChoice';
import TrueFalse from './types/TrueFalse';
import Number from './types/Number';
import Text from './types/Text';

class Question extends Component {
  render() {
    const question =
      'In the series How To Get Away with Murder, how many students did Annalise Keating hired as part of her team?';
    const choices = ['Apple', 'Vegetable', 'Vegan', 'Meat'];

    return (
      <div className="question">
        <div className="top">
          <div className="category">
            <span>TV Series</span>
          </div>
          <div className="counter">
            <span>3</span>
            <span>5</span>
          </div>
        </div>
        <div className="center">
          <TrueFalse question={question} />
        </div>

        <div className="bottom">
          <img src={logo} alt="" className="qlogo" />
          <div className="exit">
            <button className="secondary">End Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
