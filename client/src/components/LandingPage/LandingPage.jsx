import React from 'react'
import styled from 'styled-components';
import { Button } from '../Button/button'

export default function LandingPage() {
    return (
    <HeroContainer>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>COUNTRIES APP</h1>
      <p>What are you waiting for?</p>
      <HeroBtn> 
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          START EXPERIENCE
        </Button>
      </HeroBtn>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  video {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  }
  h1 {
  color: #fff;
  font-size: 100px;
  margin-top: -100px;
  }
  p { 
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}  
@media screen and (max-width: 960px) {
   h1 {
    font-size: 70px;
    margin-top: -150px;
  }
}
@media screen and (max-width: 768px) {
   h1 {
    font-size: 50px;
    margin-top: -100px;
  }
}
`;

const HeroBtn = styled.div`
  margin-top: 32px;
  .btn {
    margin: 6px;
  }
   p {
    font-size: 30px;
  }

  .btn-mobile {
    display: block;
    text-decoration: none;
  }

  .btn {
    width: 100%;
  }
`