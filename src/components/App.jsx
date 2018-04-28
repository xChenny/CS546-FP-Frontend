import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LoginPage from "./Login";
import DashPage from './Dashboard'
import Error from './Error'
import Editor from './Editor'

import "../style/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashPage} />
          <Route path="/error" component={Error} />
          <Route path="/editor" component={Editor} />
        </div>
      </Router>
    );
  }
}

export default App;
