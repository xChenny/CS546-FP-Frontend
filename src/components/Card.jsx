import React from 'react'
import '../style/App.css'

const Card = (props) => {
    const style = (props.cardStyle) ? props.cardStyle : {
        padding: 30,
        background: 'white',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',
        margin: '30px'
    }
    return (
        <div className='card' style={style}>
            {props.children}
        </div>
    )
}
export default Card
