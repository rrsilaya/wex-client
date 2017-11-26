import React, { Component } from 'react';

class MultipleChoice extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.question}</h4>
        <div className="multiple">
          <div>
            <button className="mult_choice">
              <div className="letter">
                <span>A</span>
              </div>
              <div className="letter_ans">{this.props.choices[0]}</div>
            </button>

            <button className="mult_choice">
              <div className="letter">
                <span>B</span>
              </div>
              <div className="letter_ans">{this.props.choices[1]}</div>
            </button>
          </div>

          <div>
            <button className="mult_choice">
              <div className="letter">
                <span>C</span>
              </div>
              <div className="letter_ans">{this.props.choices[2]}</div>
            </button>
            <button className="mult_choice">
              <div className="letter">
                <span>D</span>
              </div>
              <div className="letter_ans">{this.props.choices[3]}</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MultipleChoice;
