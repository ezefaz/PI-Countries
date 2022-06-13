import React from 'react'
import '../Card/Card.css'

export default function Card ({ name, flag }) {
    return (
        <div className='cardContainer'>
            <h3>{name}</h3>
            <img className='cardImg' src={flag} alt='' />
        </div>
    )
}