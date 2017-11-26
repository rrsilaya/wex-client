import { connect } from 'react-redux';
import App from './App';

import { getSession } from '../features/game/duck';

const mapStateToProps = state => {
  const { player, isGettingSession } = state.game;

  return {
    player,
    isGettingSession
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetSession: () => {
      dispatch(getSession());
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
