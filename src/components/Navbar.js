import React from 'react'

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
    </div>
  )
}

export default Navbar