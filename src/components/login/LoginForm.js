import React from 'react'
import { withRouter } from 'react-router'

const LoginForm = ({ loggedIn, login, history, verify }) => {
  return (
    <form onSubmit={e => verify(e, login, history)}>
      <h1>Welcome Back!</h1>
      <aside>Username</aside>
      <input type='text' name='username' />
      <aside>Password</aside>
      <input type='password' name='password' />
      <br />
      <button type='submit'>Submit</button>
      <br />
      <p>Don't have an account? Create one <a href='/signup'> here</a></p>
    </form>
  )
}
export default withRouter(LoginForm)