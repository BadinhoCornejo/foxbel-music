import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { fetchMusicDataStart } from "./redux/music-data/music-data.actions";

import WelcomePage from "./pages/welcome/welcome.component";
import HomePage from "./pages/home/home.component";

import "./App.css";

function App({ currentUser, fetchMusicDataStart }) {
  useEffect(() => {
    fetchMusicDataStart(currentUser.genre);
  }, [fetchMusicDataStart, currentUser]);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route
          path="/home"
          render={() => (!currentUser ? <Redirect to="/" /> : <HomePage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMusicDataStart: (searchQuery) =>
    dispatch(fetchMusicDataStart(searchQuery)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
