import React from 'react'
import './Card.css'

export default function Card({name, flag, continent, capital, population, id}) {
    return (
        <div className="container">
            <h3>{name}</h3>
            <img className= 'cardImage' src={flag} alt= 'Image not found' />
            <div className='infoContainer' >
            <h5 className='content'>Capital: {capital} </h5>
            <h5 className='content'>Continent: {continent} </h5>
            <h5 className='content'>Poblation: {population} </h5>
            </div> 
        </div>
    )
}