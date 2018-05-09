import React from "react";
import { Redirect, withRouter } from "react-router";

const Auth = ({ loggedIn, path, component, history }) => {
  console.log(loggedIn)
  if (true) {
    history.push(path);
    return <component />;
  } else return <Redirect to="/error" />;
};

export default withRouter(Auth);
