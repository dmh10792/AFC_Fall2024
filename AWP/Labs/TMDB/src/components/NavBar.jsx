import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MovieCard from './MovieCard';
import axios from 'axios'
import './NavBar.css';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));  

const NavBar = ({setCards}) => {

  const { VITE_TMDB_API_TOKEN } = process.env;//desctructuring the token from the process

  const baseURL = "https://api.themoviedb.org/3";
  const nowPlayingRoute = "movie/now_playing";
  const searchRoute = "search/";


  const handleNowPlaying = () => {

    let endpoint = `${baseURL}/${nowPlayingRoute}`;

    const options = {
      method: 'GET',
      url: endpoint,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
      }
    };

    axios
      .request(options)
      .then(response =>{
        let movieArray = response.data.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}/> // the ".map" maps the returned component to the 
        });
        setCards(movieArray);
      })
      .catch(error => console.log(error.message));

  }

  const handleSearch = () => {//gotta get the text entered into the searchbox
    let endpoint = `${baseURL}/${searchRoute}`;

    const options = {
      method: 'GET',
      url: endpoint,
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
      }
    };

    axios
      .request(options)
      .then(response =>{
        let movieArray = response.data.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}/> // the ".map" maps the returned component to the 
        });
        setCards(movieArray);
      })
      .catch(error => console.log(error.message));
  }


    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <h5>Desmond's<br/>Movie<br/>Project</h5> 
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            disableRipple
            onClick={handleNowPlaying}
          >
            <Link className="nowPlayingLink" to="/results" >Now Playing</Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button variant="outlined" color="inherit" id="searchButton" onClick={handleSearch}>Search</Button>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar;