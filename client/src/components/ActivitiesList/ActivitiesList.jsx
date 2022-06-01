import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import Activity from '../Activity/Activity'
// import './ActivitiesList.css'

export default function ActivitiesList () {
    const activities = useSelector((state) => state.activities)
    // console.log(state.activities)
    return (
        <div className='act-container'>
            <div>
                <NavBar />
            </div>

            <div className='act-cards'> {
                activities?.map((a) => {
                    return (
                    <div className='act-card-list'>
                        <Activity 
                        name={a.name}
                        duration={a.duration}
                        season={a.season}
                        difficulty={a.difficulty}
                        />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}