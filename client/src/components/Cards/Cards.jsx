import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries, getActivities, getContinents, orderByName, orderByPopulation, filterByActivities  } from '' 
import { LOWER_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, ALL_OF_N_AMERICA, ALL_OF_S_AMERICA, ALL_OF_ANTARTICA, ALL_OF_ASIA, ALL_OF_EUROPE, ALL_OF_OCEANIA, ASCENDENT, DESCENDENT } from ''
import Card from '../Card/Card'
import Paginado from '../Paginado/Paginado' 
import './Cards.css'

export default function Home() {
    const dispatch = useDispatch()
    const activities = useSelector((state) => state.activities)
    const countries = useSelector((state) => state.countries)

    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage ] = useState(10)
    const lastCountry = currentPage * countriesPerPage
    const firstCountry = lastCountry - countriesPerPage
    const currentCountry = countries.slice(firstCountry, lastCountry)
    const[, setOrder] = useState("")

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    function refreshCountries (e) {
        e.preventDefault()
        dispatch(getCountries())
    }

    function handleFilterContinent(e) {
        dispatch(getContinents(e.target.value))
        setCurrentPage(1)
    }

    function handleFilterActivities(e) {
        dispatch(filterByActivities(e.target.value))
        setCurrentPage(1)
    }

    function handleSort(e) {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordered ${e.target.value}`)
    }

    function handleSort2 (e) {
        e.preventDefault()
        dispatch(orderByPopulation(e.target.value))
        setCurrentPage(1)
        setOrder(`Ordered ${e.target.value}`)
    }

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    return ( 
        <div className ='cardsContainer'>
            <div className='filterContainer'>
                <button id='b1' className='filterOrder' onClick={(e) => refreshCountries(e)}>Refresh</button>
                    <select className='filterOrder'>
                        onChange={(e) => {
                            handleSort(e)
                        }}
                        <option>FILTER BY ALPHABETICAL ORDER</option>
                        <option value={ASCENDENT} />
                        <option value={DESCENDENT} />
                    </select>

                    <select className='filterOrder'>
                        onChange={(e) => {
                            handleSort2(e)
                        }}
                        <option>FILTER BY POPULATION</option>
                        <option value={HIGHER_POPULATION} />
                        <option value={LOWER_POPULATION} />
                    </select>

                    <select className='filterOrder' onChange={(e) => handleFilterActivities(e)}> 
                    <option value='todos'>Activities</option>
                    {activities.map((v) => (
                        <option value={v.name}>{v.name}</option> 
                    ))}
                    </select>

                    <select className='filterAndOrder' onChange={(e) => handleFilterContinent(e)}>
                        <option value="continent">Continents</option>
                        <option value={ALL}>All</option>
                        <option value={ALL_OF_AFRICA}>Africa</option>
                        <option value={ALL_OF_ANTARTICA}>Antartica</option>
                        <option value={ALL_OF_N_AMERICA}>North America</option>
                        <option value={ALL_OF_S_AMERICA}>South America</option>
                        <option value={ALL_OF_ASIA}>Asia</option>
                        <option value={ALL_OF_EUROPE}>Europe</option>
                        <option value={ALL_OF_OCEANIA}>Oceania</option>
                     </select>
                </div> 
                
                <Paginado 
                countriesPerPage={countriesPerPage}
                countries={countries.length}
                paginado={paginado}
                />
            <div className='cardsBox'> 
                {currentCountryCountry?.map((country) => {
                    return (
                        <div key={country.id}>
                            <Link to={'/home' + country.id}> 
                            <Card 
                                name={country.name}
                                flag={country.flag}
                                continent={country.continent}
                                capital={country.capital}
                                population={country.population}   
                                />                                                     
                            </Link>
             </div>
                )
            })}
        </div>
        </div>
    )
}
