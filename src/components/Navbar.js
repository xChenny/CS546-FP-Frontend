import React from 'react'
import { NavLink } from 'react-router-dom'

// A Navbar presentational component

const Navbar = () => {
  const style = {
    width: '100vw',
    height: '50px',
    backgroundColor: 'white'
  }
  return (
    <div className='navbar' style={style}>
      <p style={{margin: '0px'}}>Navbar</p>
      <NavLink to='/'>Home </NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
    </div>
  )
}

export default Navbar