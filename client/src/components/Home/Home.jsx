import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid'

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getCountries, orderByName, orderByPopulation, getActivities } from '../../redux/actions';
import { LOWER_POPULATION, HIGHER_POPULATION, ASCENDENT, DESCENDENT} from '../../Const/Const';

import Cards from '../Cards/Cards'
import Paginate from '../Paginate/Paginate'
import Nav from '../Nav/Nav';
import { Container, FilterContainer, CardsBox, CardsContainer } from './styles';
import Filters from './Filters/Filters';
import Refreshing from './Filters/Refreshing';


export default function Home() {
    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities);
    const countries = useSelector((state) => state.countries);
  
    // PAGINADO

    const [currentPage, setCurrentPage] = useState(1); 
    const [countriesPerPage] = useState(8);           
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; 
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry); 
        
    const [, setOrden] = useState("");
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    function handleSort(e) {
      e.preventDefault();
      dispatch(orderByName(e.target.value));
      setCurrentPage(1);
      setOrden(`Ordenado ${e.target.value}`); 
    }
  
    function handlePopulation(e) {
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
        <Filters />
        <Refreshing />
        <FilterContainer>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
           <InputLabel id="alphabetic">Alphabetic</InputLabel>
           <Select labelId="alphabetic" id="alphabetic" label="Alphabetic" onChange={(e) => handleSort(e)}
          >
            <MenuItem value={ASCENDENT}> A-Z </MenuItem>  
            <MenuItem value={DESCENDENT}> Z-A </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="population">Population</InputLabel>
          <Select labelId="population" id="population" label="Population" onChange={(e) => handlePopulation(e)}
          >
            <MenuItem value={HIGHER_POPULATION}>Higher</MenuItem>
            <MenuItem value={LOWER_POPULATION}>Lower</MenuItem>
            </Select>
          </FormControl>
        </FilterContainer>
        <Paginate countriesPerPage={countriesPerPage} countries={countries.length} paginate={paginate} />
        <CardsBox> 
        {currentCountry?.map((country) => {
          return ( 
            <div key={country.id}
            >
                  <Cards
                    name={country.name}
                    flag={country.flag}
                    continent={country.continent}
                    capital={country.capital}
                    population={country.population}
                    subregion={country.subregion}
                    area={country.area}
                    id={country.id}
                    activities={country.activities}
                    />
              </div>
            );
          })}
          </CardsBox>
      </Container>
    );
  }