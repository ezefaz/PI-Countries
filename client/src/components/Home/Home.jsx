import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getCountries, orderByName, orderByPopulation, getActivities, getContinents, filterByActivities } from '../../redux/actions'
import { LOWER_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_S_AMERICA, ALL_OF_EUROPE, ALL_OF_N_AMERICA, ALL_OF_OCEANIA, ASCENDENT, DESCENDENT} from '../../Const/Const'

import Card from '../Card/Card'
import Paginate from '../Paginate/Paginate'
import Nav from '../Nav/Nav';
import { Container, FilterContainer, CardsBox, Filtering, Refresh } from './styles';


export default function Home() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const countries = useSelector((state) => state.countries);
  
    // PAGINADO

    const [currentPage, setCurrentPage] = useState(1); 
    const [countriesPerPage] = useState(9);           
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; 
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry); 
        
    const [, setOrden] = useState("");
  
    const paginate = (pageNumber) => { 
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
      dispatch(filterByActivities(e.target.value));
      setCurrentPage(1);
    }
  
    function handleSort(e) {
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`); 
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
      <Container>
        <Nav paginate={setCurrentPage}/>
        <FilterContainer>
        <Refresh className='filterAndOrder' onClick={(e)=>refreshCountries(e)}>Refresh</Refresh>
          <Filtering
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <option selected disabled value=" ">Filter by alphabetical order</option>
            <option value={ASCENDENT}> A-Z </option>  
            <option value={DESCENDENT}> Z-A </option>
          </Filtering>

          <Filtering
            onChange={(e) => {
              handleSort2(e);
            }}
          >
            <option selected disabled value=" ">Filter by population</option>
            <option value={HIGHER_POPULATION}>Higher poblation</option>
            <option value={LOWER_POPULATION}>Lower poblation</option>
          </Filtering>
  
          <Filtering onChange={(e) => handleFilterActivity(e)}>
            <option selected disabled value=" ">Activities</option>
            <option value='All'>All</option>
            {activities?.length && activities.map((v, index) => (
              <option key={index} value={v.name}>{v.name}</option>
            ))}
          </Filtering>
  
          <Filtering onChange={(e) => handleFilterContinent(e)}>
            <option selected disabled value=" ">Continents</option>
            <option value={ALL}>All</option>
            <option value={ALL_OF_AFRICA}>Africa</option>
            <option value={ALL_OF_ANTARCTICA}>Antarctica</option>
            <option value={ALL_OF_N_AMERICA}>North America</option>
            <option value={ALL_OF_S_AMERICA}>South America</option>
            <option value={ALL_OF_ASIA}>Asia</option>
            <option value={ALL_OF_EUROPE}>Europe</option>
            <option value={ALL_OF_OCEANIA}>Oceania</option>
          </Filtering>
        </FilterContainer>
        <Paginate countriesPerPage={countriesPerPage} countries={countries.length} paginate={paginate} />

        <CardsBox>
          {currentCountry?.map((country) => {
            return (
              <div key={country.id}>
                <Link to={"/detail/" + country.id}>
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
        </CardsBox>
      </Container>
    );
  }