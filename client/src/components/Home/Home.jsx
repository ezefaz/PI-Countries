import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries, orderByName, orderByPopulation, getActivities, getContinents, filterByActivities } from '../../redux/actions'
import { LOWER_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_S_AMERICA, ALL_OF_EUROPE, ALL_OF_N_AMERICA, ALL_OF_OCEANIA, ASCENDENT, DESCENDENT} from '../../Const/Const'
import Card from '../Card/Card'
import Paginate from '../Paginate/Paginate'
import './Home.css'
import NavBar from '../NavBar/NavBar'

export default function Home() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    
    const countries = useSelector((state) => state.countries);
  
  // PAGINADO

  // Primero voy a armar varios estados locales.


    const [currentPage, setCurrentPage] = useState(1); // guardame en el estado local la pagina actual, que empieza en uno por que siempre voy a arrancar en la primer pagina
    const [countriesPerPage] = useState(9);           //seteo los countries por pagina, el readme dice que sean 9.
    const indexOfLastCountry = currentPage * countriesPerPage; // declaro una constante con el indice del ultimo pais. Mi numero de pagina (1) * los paises por pagina (9)
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // esto daria 0. (9 - 9)
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry); // esta constante va a guardar los paises a renderizar dependiendo de la pagina. Entonces, a todos los paises, hace un slice que agarra un arreglo y toma una porción, dependiendo de lo que le pase por parametro. En este caso el indice del primer y ultimo personaje. Esto va a ir modificandose dependiendo en la pagina en la que este
        
    const [, setOrden] = useState("");
  
    const paginate = (pageNumber) => {  // esta constante paginado nos va a ayudar al renderizado
      setCurrentPage(pageNumber);
    };
  
    function refreshCountries(e){
      e.preventDefault()
      dispatch(getCountries())
    }
  
    function handleFilterContinent(e) {
      dispatch(getContinents(e.target.value));
      setCurrentPage(1);
    }
  
    function handleFilterActivity(e) {
      e.preventDefault()
      dispatch(filterByActivities(e.target.value));
      setCurrentPage(1);
    }
  
    function handleSort(e) {
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`); // sin este estado no me funcionaria.
    }
  
    function handleSort2(e) {
      e.preventDefault();
      dispatch(orderByPopulation(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`);
    }
  
    useEffect(() => {
      dispatch(getCountries());
      dispatch(getActivities());
    }, [dispatch]);
  
    return (
      <div className="cards-container">
        <div>
          <NavBar />
        </div>
        <div className="filterContainer">
        <button id='b1' className='filterAndOrder' onClick={(e)=>refreshCountries(e)}>Refresh</button>
          <select className='filterAndOrder'
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option>Filter by alphabetical order</option>
            <option value={ASCENDENT}> A-Z </option>
            <option value={DESCENDENT}> Z-A </option>
          </select>
  
          <select className='filterAndOrder'
            onChange={(e) => {
              handleSort2(e);
            }}
          >
            <option>Filter by population</option>
            <option value={HIGHER_POPULATION}>Higher poblation</option>
            <option value={LOWER_POPULATION}>Lower poblation</option>
          </select>
  
          <select className='filterAndOrder' onChange={(e) => handleFilterActivity(e)}>
            <option value="todos">Activities</option>
            {activities.map((v) => (
              <option value={v.name}>{v.name}</option>
            ))}
          </select>
  
          <select className='filterAndOrder' onChange={(e) => handleFilterContinent(e)}>
            <option>Continents</option>
            <option value={ALL}>All</option>
            <option value={ALL_OF_AFRICA}>Africa</option>
            <option value={ALL_OF_ANTARCTICA}>Antarctica</option>
            <option value={ALL_OF_N_AMERICA}>North America</option>
            <option value={ALL_OF_S_AMERICA}>South America</option>
            <option value={ALL_OF_ASIA}>Asia</option>
            <option value={ALL_OF_EUROPE}>Europe</option>
            <option value={ALL_OF_OCEANIA}>Oceania</option>
          </select>
        </div>
  
        <Paginate //le voy a pasar las props que necesita el componente para renderizarse.
          countriesPerPage={countriesPerPage} // le paso el estado de paises por pagina
          countries={countries.length} // a los paises le paso el .length, ya que necesito un valor numerico.
          paginate={paginate} // como paginado le voy a pasar la constante del paginado
        />
  
        <div className='cardsBox'>
          {currentCountry?.map((country) => {
            return (
              <div key={country.id}>
                <Link to={"/home/" + country.id}>
                  <Card
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    capital={country.capital}
                    population={country.population}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }