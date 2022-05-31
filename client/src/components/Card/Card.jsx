import React from 'react'
import '../Card/Card.css'

export default function Card ({name, flag, continent, capital, population, id}) {
    return (
        <div className='cardContainer'>
            <h3>{name}</h3>
            <img className='cardImg' src={flag} alt='Image not found' />
            <section classname='infoContainer'>
             <h5 className='content'>Capital: {capital}</h5>
             <h5 className='content'>Continent: {continent}</h5>
             <h5 className='content'>Poblation: {population}</h5>
            </section>
        </div>
    )
}