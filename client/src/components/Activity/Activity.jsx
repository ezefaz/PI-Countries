import React from 'react'
import '../ActivitiesList/ActivitiesList'

export default function Activity({name, duration, season, difficulty, idCountry}) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>duration: {duration}</h3>
            <h3>season: {season}</h3>
            <h3>difficulty: {difficulty}</h3>
            <h3>{idCountry}</h3>
        </div>
    )
}