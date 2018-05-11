import React from "react";
import { withRouter } from "react-router";

// Presentational component for the Login System

const LoginForm = ({ loggedIn, login, history, verify }) => {
  return (
    <form onSubmit={e => verify(e, login, history)}>
      <h1 style={{ marginBottom: "40px" }}>Welcome Back!</h1>
      <div className='form-page'>
        <div className="spacer" />
        <div style={{ width: "40em" }}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="form-control flat"
            style={{ marginBottom: "30px", width: "100%" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control flat"
            style={{ width: "100%" }}
          />
          <br />
          <button
            type="submit"
            className="btn btn-hg btn-primary"
            style={{ marginBottom: "30px", width: "100%" }}
          >
            Submit
          </button>
          <br />
          <p style={{color: '#bdc3c7'}}>
            Don't have an account? Create one <a href="/signup"> here</a>
          </p>
        </div>
        <div className="spacer" />
      </div>
    </form>
  );
};
export default withRouter(LoginForm);
