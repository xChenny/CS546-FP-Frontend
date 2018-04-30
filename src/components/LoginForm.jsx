import React from "react";

const LoginForm = () => {
  return (
    <form action="http://localhost:5500/login" method="POST">
      <h1>Welcome Back!</h1>
      <aside>Username</aside>
      <input type="text" name="username" />
      <aside>Password</aside>
      <input type="password" name="password" />
      <br />
      <button type="submit">Submit</button>
      <br />
      <p>Don't have an account? Create one <a href="/signup"> here</a></p>
    </form>
  );
};
export default LoginForm;
