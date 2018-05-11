import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// import Auth from "../Auth";
import Navbar from "../navbar";
import Homepage from "../Homepage";
import FormPage from "../FormPage";
import DashPage from "../dashboard";
import Editor from "../editor";
import ImageViewer from "../imageviewer/Image";
import Grid from "../editor/Grid";

import "../../style/App.css";

/* 
    This is the Layout Component responsible for creating 
    the layout for the Application 
*/
class App extends Component {
  // This component gets the loggedIn variable from the redux state

  auth(component) {
    if (!this.props.loggedIn) {
      return FormPage("error");
    } else {
      return component;
    }
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <Router>
        <div className="App">
          {/* Doesn't Require Auth */}
          <Route path="/" component={() => <Navbar loggedIn={loggedIn} />} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" render={() => FormPage("signup")} />
          <Route exact path="/login" render={() => FormPage("login")} />
          <Route path="/error" render={() => FormPage("error")} />

          {/* Requires Auth */}
          <Route path="/dashboard" render={() => this.auth(<DashPage />)} />
          <Route path="/editor/:id" render={() => this.auth(<Editor />)} />
          <Route path="/image/:id" render={() => this.auth(<ImageViewer />)} />
          <Route
            path="/newfile"
            render={() => this.auth(<FormPage view="filename" />)}
          />
          <Route
            path="/uploadfile"
            render={() => this.auth(<FormPage view="upload" />)}
          />

          <Route path="/grid" component={Grid} />
        </div>
      </Router>
    );
  }
}

export default App;
