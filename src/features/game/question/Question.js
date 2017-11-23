import React, { Component } from 'react';
import './style.css';

import logo from '../../../assets/logo/white.svg';

class Question extends Component {
  render() {
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
          <h4>
            In the series How To Get Away with Murder, how many students did
            Annalise Keating hired as part of her team?
          </h4>
          {/*<input type="number" className="primary" placeholder="Answer" />*/}
          {/*
            <div className="truefalse">
              <button className="primary"><span>True</span></button>
              <button className="primary"><span>False</span></button>
            </div>
          */}
          <div className="multiple">
            <div>
              <button className="mult_choice">
                <div className="letter">
                  <span>A</span>
                </div>
                <div className="letter_ans">
                  In the series How To Get Away with Murder
                </div>
              </button>
              <button className="mult_choice">
                <div className="letter">
                  <span>B</span>
                </div>
                <div className="letter_ans">
                  In the series How To Get Away with Murder
                </div>
              </button>
            </div>
            <div>
              <button className="mult_choice">
                <div className="letter">
                  <span>C</span>
                </div>
                <div className="letter_ans">
                  In the series How To Get Away with Murder
                </div>
              </button>
              <button className="mult_choice">
                <div className="letter">
                  <span>D</span>
                </div>
                <div className="letter_ans">
                  In the series How To Get Away with Murder
                </div>
              </button>
            </div>
          </div>
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
