import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/movies/:id" render={() => <Movies />} />
        <Route exact path="/movies" render={() => <Movies />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
