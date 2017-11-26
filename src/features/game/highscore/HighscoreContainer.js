import { connect } from 'react-redux';
import Highscore from './Highscore';

import { getHighscores } from './duck';

const mapStateToProps = state => {
  const { list } = state.highscores;

  return {
    list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHighscores: () => {
      dispatch(getHighscores());
    }
  };
};

const HighscoreContainer = connect(mapStateToProps, mapDispatchToProps)(
  Highscore
);

export default HighscoreContainer;
