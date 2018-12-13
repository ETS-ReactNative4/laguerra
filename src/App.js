import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import About from "./components/About";
import TakeAction from "./components/TakeAction";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Watch from "./components/Watch";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/action" component={TakeAction} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/watch" component={Watch} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
