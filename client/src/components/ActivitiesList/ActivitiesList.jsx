import React from 'react'
import { useSelector } from 'react-redux'
import Activity from '../Activity/Activity'
import { Link } from 'react-router-dom'
import './ActivitiesList.css'
import Nav from '../Nav/Nav';


export default function ActivitiesList () {
    const activities = useSelector((state) => state.activities)

    return (
        <div className='act-container'>
            <div>
                <Nav />
            </div>
            <div className='act-cards'> 
            {activities.length? activities.map((ac) => 
                    <div className='act-card-list'>
                       <Activity 
                       name={ac.name}
                       duration={ac.duration}
                       season={ac.season}
                       difficulty={ac.difficulty} />
                    </div>)
                    : <div className='activities-empty'>
                    <h3>No activities been created</h3>
                    <p>Do you want to create one?</p>
                    <Link to='/activity'>
                        <button className='noact-btn'>
                            Create New Activity
                        </button>
                    </Link>
                </div>
         } 
            </div>
        </div>
    )
}