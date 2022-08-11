import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getCountries, orderByName, orderByPopulation, getActivities, getContinents, filterByActivities } from '../../redux/actions'
import { LOWER_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, ALL_OF_S_AMERICA, ALL_OF_EUROPE, ALL_OF_N_AMERICA, ALL_OF_OCEANIA, ASCENDENT, DESCENDENT} from '../../Const/Const'

import Card from '../Card/Card'
import Paginate from '../Paginate/Paginate'
import Nav from '../Nav/Nav';
import { Container, FilterContainer, CardsBox, Filtering, Refresh } from './styles';
import Filters from './Filters/Filters';
import Refreshing from './Filters/Refreshing';


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
        <Filters />
        <Refreshing />
        <FilterContainer>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
           <InputLabel id="alphabetic">Alphabetic</InputLabel>
           <Select
           labelId="alphabetic"
           id="alphabetic"
           label="Alphabetic"
            onChange={(e) => {
              handleSort(e);
            }}
          >
            <MenuItem value={ASCENDENT}> A-Z </MenuItem>  
            <MenuItem value={DESCENDENT}> Z-A </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="population">Population</InputLabel>
          <Select
            labelId="population"
            id="population"
            label="Population"
            onChange={(e) => {
              handleSort2(e);
            }}
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