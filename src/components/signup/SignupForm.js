import React from "react";

// Presentational component for the Signup system of the application

const SignupForm = () => {
  return (
    <form action="/create/user" method="POST">
      <h1 style={{marginBottom: '30px'}}>Create Your Account</h1>
      <div className="form-page">
        <div className="spacer" />
        <div style={{ width: "40em" }}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            class="form-control"
            style={{ marginBottom: "30px", width: "100%" }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            class="form-control"
            style={{ width: "100%" }}
          />
          <br />
          <button
            type="submit"
            class="btn btn-hg btn-primary"
            style={{ marginBottom: "30px", width: "100%" }}
          >
            Submit
          </button>
          <br />
          <p style={{color: '#bdc3c7'}}>
            Have an account already? Log in<a href="/login"> here</a>
          </p>
        </div>
        <div className="spacer" />
      </div>
    </form>
  );
};

export default SignupForm;
