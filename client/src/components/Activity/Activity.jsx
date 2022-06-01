import React from 'react'
import '../ActivitiesList/ActivitiesList'

export default function Activity({name, duration, season, difficulty, idCountry}) {
    return (
        <div className='act-container'>
            <h2 className='act'>{name}</h2>
            <h3 className='act-props'>Duration: {duration}</h3>
            <h3 className='act-props'>Season: {season}</h3>
            <h3 className='act-props'>Difficulty: {difficulty}</h3>
            <h3>{idCountry}</h3>
        </div>
    )
}