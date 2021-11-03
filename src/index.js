import React from "react";
import ReactDOM from "react-dom";

import { MemoryRouter, Switch, Route } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import "./css/index.css";

import LandingScreen from "./screens/LandingScreen";
import HangmanScreen from "./screens/HangmanScreen";
import LostScreen from "./screens/LostScreen";

const DisplayScreens = () => {
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path="/lost" component={LostScreen} />
        <Route exact path="/play" component={HangmanScreen} />
        <Route exact path="/" component={LandingScreen} />
      </Switch>
    </MemoryRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <DisplayScreens />
  </React.StrictMode>,
  document.getElementById("root")
);
