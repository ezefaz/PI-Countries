import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import '../Paginate/Paginate.css';

export default function Paginate({countriesPerPage, countries, paginate}) {
    const pageNumbers = [] 

    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) { 
        pageNumbers.push(i) 
    }

    return ( 
    <> 
        <nav className='pag-container'>
            <ul className='ul'>
                {pageNumbers && pageNumbers.map(number => ( 
                    <li key={number}>
                        <a className ='number-paginate' onClick={() => paginate(number)}>{number}</a> 
                    </li>
                ))}
            </ul>
        </nav>
    </>
    )
}