import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import Activity from '../Activity/Activity'
import './ActivitiesList.css'

export default function ActivitiesList () {
    const activities = useSelector((state) => state.activities)
    // console.log(state.activities)

    return (
        <div className='act-container'>
            <div>
                <NavBar />
            </div>
            <div className='act-cards'> {
               activities && activities?.map((ac) => {
                    return (
                    <div className='act-card-list'>
                        <Activity 
                        name={ac.name}
                        duration={ac.duration}
                        season={ac.season}
                        difficulty={ac.difficulty}
                        />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}