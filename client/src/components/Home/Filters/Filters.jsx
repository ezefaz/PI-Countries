import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { getCountries, orderByName, orderByPopulation, getActivities, getContinents, filterByActivities } from '../../../redux/actions';
import { LOWER_POPULATION, HIGHER_POPULATION, ALL, ALL_OF_AFRICA, ALL_OF_ANTARCTICA, ALL_OF_ASIA, 
    ALL_OF_S_AMERICA, ALL_OF_EUROPE, ALL_OF_N_AMERICA, ALL_OF_OCEANIA, ASCENDENT, DESCENDENT} from '../../../Const/Const'

export default function Filters() {
  const [age, setAge] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const dispatch = useDispatch();

  const [, setOrden] = useState("");
  const paginate = (pageNumber) => { 
    setCurrentPage(pageNumber);
  };

  const activities = useSelector((state) => state.activities);
  const countries = useSelector((state) => state.countries);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function handleFilterActivity(e) {
    dispatch(filterByActivities(e.target.value));
    setCurrentPage(1);
  };

  function handleFilterContinent(e) {
    dispatch(getContinents(e.target.value));
    setCurrentPage(1);
  };

  useEffect(() => {      
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
 <Box sx={{ minWidth: 120 }} style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="activities">Activities</InputLabel>
    <Select
        labelId="activities"
        id="activities"
        value=''
        label="Activities"
        onChange={handleFilterActivity}
    >
        <MenuItem value="All"> All </MenuItem>
        {
        activities?.length && activities.map((v, index) => <MenuItem key={index} value={v.name}>{v.name}</MenuItem>)
        }
    </Select>
    </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="continents">Continents</InputLabel>
        <Select
          labelId="continents"
          id="continents"
          value={age}
          label="Continents"
          onChange={handleFilterContinent}
        >
          <MenuItem value={ALL}>
            <em>All</em>
          </MenuItem>
          <MenuItem value={ALL_OF_AFRICA}>Africa</MenuItem>
          <MenuItem value={ALL_OF_EUROPE}>Europe</MenuItem>
          <MenuItem value={ALL_OF_ASIA}>Asia</MenuItem>
          <MenuItem value={ALL_OF_S_AMERICA}>South America</MenuItem>
          <MenuItem value={ALL_OF_N_AMERICA}>North America</MenuItem>
          <MenuItem value={ALL_OF_OCEANIA}>Ocenia</MenuItem>
          <MenuItem value={ALL_OF_ANTARCTICA}>Antarctica</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
