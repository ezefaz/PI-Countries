import React, { useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './styles';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { searchCountries } from '../../redux/actions'

export default function Nav() {

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  function onSubmit(e) {
      e.preventDefault()
      if (search.length === 0) return alert('Insert a country')
      dispatch(searchCountries(search))
      setSearch('')
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      if (search.length === 0) return alert('Insert a country')
      dispatch(searchCountries(search))
      setSearch('')
    }
  };

  function onInputChange(e) {
      e.preventDefault()
      setSearch(e.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link to='/home' style={{  textDecoration: 'none', color: 'white' }}>COUNTRIES</Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon 
              cursor='pointer'
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Country…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={onInputChange}
              value={search}
              onKeyPress={handleKeyPress}
            />
             <Button onClick={onSubmit} color='primary' variant='contained' value=''>Search</Button>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
