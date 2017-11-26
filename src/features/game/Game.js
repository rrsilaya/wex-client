import React, { Component } from 'react';
import Particles from 'react-particles-js';
import config from './config';

import './stylesheets/animations.css';
import './stylesheets/style.css';
import './stylesheets/defaults.css';
import './stylesheets/helper.css';

import Question from './question/Question';
import Splash from './splash/Splash';
import Register from './register/Register';
import Category from './register/Category';

class Game extends Component {
  renderPage = page => {
    switch (page) {
      case 'splash':
        return <Splash changePage={this.props.handleChangePage} />;
      case 'register':
        return (
          <Register
            changeForm={this.props.handleChangeForm}
            qty={this.props.form.qty}
            name={this.props.form.name}
            changePage={this.props.handleChangePage}
          />
        );
      case 'choose-category':
        return (
          <Category
            categories={this.props.categories}
            handleGetCategories={this.props.handleGetCategories}
            isLoading={this.props.isGettingCategories}
            hasError={this.props.hasErroredCategories}
            name={this.props.form.name}
            qty={this.props.form.qty}
            newGame={this.props.handleNewGame}
          />
        );
      case 'gameplay':
        return (
          <Question
            player={this.props.player}
            endGame={this.props.handleEnd}
            handleAnswer={this.props.handleAnswer}
            isAnswering={this.props.isAnswering}
          />
        );
    }
  };

  render() {
    const { page } = this.props;

    return (
      <div className="game">
        <Particles params={config} className="background" />
        <div className="content">
          <div>{this.renderPage(page)}</div>
        </div>
      </div>
    );
  }
}

export default Game;
