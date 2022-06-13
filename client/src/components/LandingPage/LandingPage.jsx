import React from 'react'
import { Button } from '../Button/button'
import './LandingPage.css'


export default function LandingPage() {
    return (
<div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>COUNTRIES APP</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          START EXPERIENCE
        </Button>
      </div>
    </div>
  );
}