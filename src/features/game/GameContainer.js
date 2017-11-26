import { connect } from 'react-redux';
import Game from './Game';

import {
  changePage,
  changeForm,
  getCategories,
  newGame,
  endGame
} from './duck';

const mapStateToProps = state => {
  const {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player
  } = state.game;

  return {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories,
    player
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
    }
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
