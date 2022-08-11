import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import Stack from '@mui/material/Stack';

import { getCountries, getActivities } from '../../../redux/actions';

export default function Refreshing() {

  const dispatch = useDispatch();

function refreshCountries(e){
    e.preventDefault()
    dispatch(getCountries())
    }

useEffect(() => {      
    dispatch(getCountries());
    dispatch(getActivities());
    }, [dispatch]);


  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<CachedOutlinedIcon />} onClick={(e)=>refreshCountries(e)} style={{ marginTop: '2rem', justifyContent: 'center', gap: '1rem', width:'auto', marginLeft: '45%', marginTop: '0.5rem', marginBottom: '1rem' }} >
        Refresh
      </Button>
    </Stack>
  );
}
