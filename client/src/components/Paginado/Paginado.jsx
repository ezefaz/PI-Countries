import React from 'react'
import './Paginado.css'

export default function Paginado ({countriesPerPage, countries, paginado}) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav className='paginadoContainer'>
            <ul className='list'>
                {pageNumbers && pageNumbers.map(number =>(
                    <li key={number}> 
                        <a className='numeroPaginado' href onclick={() => paginado(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}