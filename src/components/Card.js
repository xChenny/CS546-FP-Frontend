import React from 'react'
import '../style/App.css'

// A Card component

const Card = (props) => {
  const style = {
    padding: '1.5em',
    background: 'white',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    margin: '.5em',
    borderRadius: '10px',
    backgroundColor: '#ecf0f1',
    textAlign: 'center'
  }

  if (props.cardStyle) Object.assign(style, props.cardStyle)

  return (
    <div className='card' style={style}>
      {props.children}
    </div>
  )
}
export default Card
