import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className="landingPage">
            <h1 className= 'landingTitle'>COUNTRIES APP</h1>
            <h2 clasName = 'landingSubtitle'>You can search for any country in the world!</h2>
            <Link to = '/home'> 
                <button className='btn'><span></span>Start experience</button>
            </Link>
        </div>
    )
}