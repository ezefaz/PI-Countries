import React from 'react'
import '../Paginate/Paginate.css'

export default function Paginate({countriesPerPage, countries, paginate}) {
    const pageNumbers = [] // por el momento no tengo pageNumbers
    for (let i = 1; i <= Math.ceil(countries/countriesPerPage); i++) { // Voy a recorrer el arreglo en donde voy a tomar el numero redondo resultante entre dividir todos los paises sobre los paises por pagina. 
        pageNumbers.push(i) // al numero resultante del ciclo for, lo voy a pushear en el arrelgo vacio. 
    }
    return ( // este componente va a renderizar los numeros de las paginas.
        <nav className='pag-container'>
            <ul className='ul'>
                {pageNumbers && pageNumbers.map(number => ( // fijate si el arreglo de pageNumbers tiene algo, si lo tiene, hago un map en donde me devuelve todos los numeros que tiene el paginado. Cuando haga click, le voy a pasar el paginado declarado en el componente Home, y le voy a pasar el number.
                    <li key={number}>
                        <a className ='number-paginate' onClick={() => paginate(number)}>{number}</a> 
                    </li>
                ))}
            </ul>
        </nav>
    )
}