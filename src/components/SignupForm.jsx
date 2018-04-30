import React from "react";

const SignupForm = () => {
  return (
    <form action="http://localhost:5500/create/user" method="POST">
      <h1>Create Your Account</h1>
      <aside>Username</aside>
      <input type="text" name="username" />
      <aside>Password</aside>
      <input type="password" name="password" />
      <br />
      <button type="submit">Submit</button>
      <br />
      <p>Already have an account? Log in <a href="/login">here</a></p>
    </form>
  );
};

export default SignupForm;
