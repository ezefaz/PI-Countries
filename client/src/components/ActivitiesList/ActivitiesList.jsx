import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getActivities } from '../../redux/actions'
import NavBar from '../NavBar/NavBar'
import Activity from '../Activity/Activity'
// import './ActivitiesList.css'

export default function ActivitiesList () {
    const activities = useSelector((state) => state.activities)
    const dispatch = useDispatch()
    // console.log(state.activities)

useEffect (() => {
    dispatch(getActivities())
}, [dispatch])

    return (
        <div className='act-container'>
            <div>
                <NavBar />
            </div>

            <div className='act-cards'> {
               activities && activities?.map((a) => {
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