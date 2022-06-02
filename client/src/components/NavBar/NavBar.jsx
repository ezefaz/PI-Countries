import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

export default function NavBar () {
    return (
        <div className='nav-container'>
            <div className='nav-cn'>
                <section className='countries'>Countries</section>
                <section className='name'>By Ezequiel Faszczak</section>
            </div>
            <div className='nav-content'>
                <Link className='nav-link' to='/home'>Home</Link>
                <Link className='nav-link' to='/activity'>Create Activity</Link>
                <Link className='nav-link' to='/activities'>Listed activities</Link>
                <SearchBar className='nav-searchbar' />
            </div>
        </div>
    )
}