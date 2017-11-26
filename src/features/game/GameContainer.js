import { connect } from 'react-redux';
import Game from './Game';

import { changePage, changeForm, getCategories } from './duck';

const mapStateToProps = state => {
  const {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories
  } = state.game;

  return {
    page,
    form,
    categories,
    isGettingCategories,
    hasErroredCategories
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
    }
  };
};

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game);
export default GameContainer;
