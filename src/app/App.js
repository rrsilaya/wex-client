import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Loader from '../features/session/Loader';
import Game from '../features/game/Game';
import DashboardContainer from '../features/dashboard/DashboardContainer';

class App extends Component {
  componentDidMount() {
    // this.props.handleGetSession();
  }

  render() {
    return (
      <div>
        {this.props.isGettingSession ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Game} />
              {!this.props.player ? (
                <Route path="/dashboard" component={DashboardContainer} />
              ) : (
                ''
              )}
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        )}
      </div>
    );
  }
}

export default App;
