import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/movies/:id"
          render={(props) => <MovieDetails {...props} />}
        />
        <Route exact path="/movies" render={() => <Movies />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
