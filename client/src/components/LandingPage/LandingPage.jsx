import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className="landingPage">
            <h1 className= 'landingTitle'>Welcome!</h1>
            <h2 clasName = 'landingSubtitle'>to Countries proyect</h2>
            <Link to = '/home'> 
                <buton className= 'landingButton'>Start</buton>
            </Link>
        </div>
    )
}