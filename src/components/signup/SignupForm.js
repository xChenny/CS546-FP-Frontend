import React from 'react'

// Presentational component for the Signup system of the application

const SignupForm = () => {
  return (
    <form action='/create/user' method='POST'>
      <h1>Create Your Account</h1>
      <aside>Username</aside>
      <input type='text' name='username' />
      <aside>Password</aside>
      <input type='password' name='password' />
      <br />
      <button type='submit'>Submit</button>
      <br />
      <p>Already have an account? Log in <a href='/login'>here</a></p>
    </form>
  )
}

export default SignupForm
