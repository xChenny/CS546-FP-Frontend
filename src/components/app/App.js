import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// import Auth from "../Auth";
import Navbar from "../Navbar";
import Homepage from "../Homepage";
import FormPage from "../FormPage";
import DashPage from "../Dashboard";
import Editor from "../editor";
import ImageViewer from '../imageviewer/Image'

import "../../style/App.css";

/* 
    This is the Layout Component responsible for creating 
    the layout for the Application 
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginState: props.loginState
    };
  }

  async componentWillReceiveProps(nextProps) {
    await this.setState({
      loginState: nextProps.loginState
    });
    console.log(this.state.loginState.loggedIn);
  }

  async login(user, password) {
    if (this.state.loggedIn) return;
    const response = axios.post("/login", { user, password });
    if (response.data) this.setState({ loggedIn: true });
  }

  render() {
    // const { loggedIn } = this.state.loginState
    return (
      <Router>
        <div className="App">
          {/* Doesn't Require Auth */}
          <Route path="/" component={Navbar} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signup" render={() => FormPage("signup")} />
          <Route exact path="/login" render={() => FormPage("login")} />
          <Route path="/error" render={() => FormPage("error")} />

          {/* Requires Auth */}
          {/* <Route path="/dashboard" component={DashPage} />
          <Route path="/editor/:id" render={({match}) => Auth(loggedIn, `/editor/${match.params.id}`, Editor)} />
          <Route path="/newfile" render={() => Auth(loggedIn, '/newfile', FormPage("filename"))} /> */}
          <Route path="/dashboard" component={DashPage} />
          <Route path="/editor/:id" component={Editor} />
          <Route path="/newfile" render={() => FormPage("filename")} />
          <Route path="/image/:id" component={ImageViewer} />

          {/* File uploading test */}
          <Route path="/uploadfile" render={() => FormPage("upload")} />

        </div>
      </Router>
    );
  }
}

export default App;
