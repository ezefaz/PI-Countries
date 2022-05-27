import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from '../../redux/actions'
import { Link } from 'react-router-dom' 

export default function Home () {
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.allCountries) // esto es lo mismo que hacer el mapStateToProps. COn useSelector traeme todo lo que esta en allCountries, en lugar de hacer el connect y toda la logica
    console.log(countries)

    useEffect (() => {
        dispatch(getCountries)
    }, []) // => pongo el arreglo vacio para que no se genere un loop infinito



    function handleClick() {
        e.preventDefault();
        dispatch(getCountries())
    }

    return(
        <div className='home'>
            <div className='container'>
                <Link to='/activity'>Create Activity</Link>
                <h1>COUNTRIES</h1>
                <button onClick={e => {handleClick(e)}}> 
                    Refresh countries
                </button>
            </div>
            <div>
                <select>
                    <option value='ascending'>ascending</option>
                    <option value='descending'>descending</option>
                </select>
            </div>



        </div>




    )
}