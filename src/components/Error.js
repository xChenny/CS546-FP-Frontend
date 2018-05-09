import React from 'react'
import { Link } from 'react-router-dom'

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
