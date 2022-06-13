import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/button'
import './NavBar.css'

export default function NavBar () {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)    
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)  

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/home' className='navbar-logo'> 
                COUNTRIES
                </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa-solid fa-circle-xmark' : 'fa-solid fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/activities' className='nav-links' onClick={closeMobileMenu}>
                      Activities
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/activity' className='nav-links' onClick={closeMobileMenu}>
                      Create Activity
                    </Link>
                </li>
            </ul>
            </div>
        </div>
    )
}