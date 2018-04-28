import React from "react";

const LoginForm = () => {
  return (
    <form action="http://localhost:5500/login" method="POST">
      <aside>Username</aside>
      <input type="text" name="username" />
      <aside>Password</aside>
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default LoginForm;
