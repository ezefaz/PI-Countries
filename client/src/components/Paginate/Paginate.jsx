import React from 'react';
import { container, pagination_ul } from './paginate.module.css'

export default function Paginate({countriesPerPage, countries, paginate}) {
    const pageNumbers = [] 

    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) { 
        pageNumbers.push(i) 
    }

    return ( 
    <div className={container}>
         <nav className={pagination_ul}>
            <ul>
                {pageNumbers && pageNumbers.map(number => ( 
                    <li key={number}>
                        <button onClick={() => paginate(number)}>{number}</button> 
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    )
}