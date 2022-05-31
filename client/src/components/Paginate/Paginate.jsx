import React from 'react'
import '../Paginate/Paginate.css'

export default function Paginate({countriesPerPage, countries, paginate}) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) { 
        pageNumbers.push(i)
    }
    return (
        <nav className='paginateContainer'>
            <ul className='ul'>
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <a className ='numberPaginate' onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}