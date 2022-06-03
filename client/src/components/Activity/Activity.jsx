import React from 'react'
import '../ActivitiesList/ActivitiesList'

export default function Activity({name, duration, season, difficulty, idCountry}) {
    return (
        <div className='div-act-container'>
            <h2 className='h2-act'>{name}</h2>
            <h3 className='h3-act'>Duration: {duration}</h3>
            <h3 className='h3-act'>Season: {season}</h3>
            <h3 className='h3-act'>Difficulty: {difficulty}</h3>
            <h3>{idCountry}</h3>
        </div>
    )
}