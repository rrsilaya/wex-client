import { connect } from 'react-redux';
import Game from './Game';

import {
  changePage,
  changeForm,
  getCategories,
  newGame,
  endGame,
  answerQuestion
} from './duck';

const mapStateToProps = state => {
  const {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player,
    isAnswering
  } = state.game;

  return {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player,
    isAnswering
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
    }
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
