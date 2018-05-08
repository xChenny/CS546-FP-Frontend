import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <Card>
      <h1>Homepage</h1>
      <Link to='/login'>Login</Link>
      <br />
      <Link to='/signup'>Signup</Link>
    </Card>
  )
}

export default Homepage
