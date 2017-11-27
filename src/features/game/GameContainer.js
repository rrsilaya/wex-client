import { connect } from 'react-redux';
import Game from './Game';

import {
  changePage,
  changeForm,
  getCategories,
  newGame,
  endGame,
  answerQuestion,
  incCategory,
  decCategory,
  resetCount
} from './duck';

const mapStateToProps = state => {
  const {
    page,
    form,
    noOfCategories,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player,
    isAnswering,
    score
  } = state.game;

  return {
    page,
    form,
    noOfCategories,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player,
    isAnswering,
    score
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChangePage: page => {
      dispatch(changePage(page));
    },
    handleChangeForm: (name, value) => {
      dispatch(changeForm(name, value));
    },
    handleGetCategories: () => {
      dispatch(getCategories());
    },
    handleNewGame: player => {
      dispatch(newGame(player));
    },
    handleEnd: () => {
      dispatch(endGame());
    },
    handleAnswer: (index, answer) => {
      dispatch(answerQuestion(index, answer));
    },
    handleIncCategory: () => {
      dispatch(incCategory());
    },
    handleDecCategory: () => {
      dispatch(decCategory());
    },
    handleResetCount: () => {
      dispatch(resetCount());
    }
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
