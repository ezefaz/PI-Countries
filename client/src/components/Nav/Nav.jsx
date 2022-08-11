import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { searchCountries } from '../../redux/actions'

export default function Nav() {

  const pages = ['home', 'activity', 'activities'];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <TravelExploreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          COUNTRIES
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center" textDecoration= 'none' >{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <TravelExploreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/home"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            width: '100%',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          COUNTRIES
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Link to={`/${page}`}> 
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none'}}
              >
              {page}
            </Button>
            </Link>
          ))}
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            </IconButton>
          </Tooltip>
          <Search>
          <SearchIconWrapper>
          <SearchIcon 
          cursor='pointer'
          />
          </SearchIconWrapper>
          <StyledInputBase
          placeholder="Find Country…"
          inputProps={{ 'aria-label': 'search' }}
          onChange={onInputChange}
          value={search}
          onKeyPress={handleKeyPress}
          />
          <Button onClick={onSubmit} color='primary' variant='outlined' value=''>Search</Button>
          </Search>
        </Box>
      </Toolbar>
    </Container>
  </AppBar>
);
};