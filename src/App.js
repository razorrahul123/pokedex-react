import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import backgroundImage from "./pattern.png";
import pikachu from "./bg-image.jpg";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import SearchBar from "./components/search/SearchBar";
import Pokemon from "./components/pokemon/Pokemon";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${pikachu})` }}>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
