import React from 'react'
import { Link } from 'react-router-dom'

// An error page used to tell users that they done goofed.

// Usually is the result of when a user tries to access a page whilst not logged in

const Error = () => {
  return (
    <React.Fragment>
      <h1>Error! Please log in!</h1>
      <Link to='/login'>
        <button>Login Here</button>
      </Link>
    </React.Fragment>
  )
}

export default Error
