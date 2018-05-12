import React from "react";
import { withRouter } from "react-router";

// Presentational component for the Signup system of the application

const SignupForm = ({ login, signup, history }) => {
  return (
    <form
      onSubmit={e => {
        console.log('submitting...')
        signup(e, e.target.username.value, e.target.password.value, login, history);
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Create Your Account</h1>
      <div className="form-page">
        <div className="spacer" />
        <div style={{ width: "40em" }}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="form-control"
            style={{ marginBottom: "30px", width: "100%" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
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
          <p style={{ color: "#bdc3c7" }}>
            Have an account already? Log in<a href="/login"> here</a>
          </p>
        </div>
        <div className="spacer" />
      </div>
    </form>
  );
};

export default withRouter(SignupForm);
