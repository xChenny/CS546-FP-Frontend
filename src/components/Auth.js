import React from "react";
import { Redirect, withRouter } from "react-router";

// "Middleware" for checking if a user is logged in before allowing them to access
// private web pages

const Auth = ({ loggedIn, path, component, history }) => {
  console.log(loggedIn)
  if (true) {
    history.push(path);
    return <component />;
  } else return <Redirect to="/error" />;
};

export default withRouter(Auth);
