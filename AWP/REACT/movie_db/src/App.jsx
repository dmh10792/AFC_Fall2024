import {BrowserRouter as Router,  Route, Routes, Link} from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const [movies, setMovies] = useState([]);

  const { VITE_TMDB_API_TOKEN } = process.env;//desctructuring the token from the process

  const baseURL = "https://api.themoviedb.org/3";

  const handleClick = () => {

    let route = "movie/now_playing";
    let endpoint = `${baseURL}/${route}`;

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
        })
        setMovies(movieArray)
      })
      .catch(error => console.log(error.message));
  }

  return (
    <>
      <Router>
        <div className="App">
          <div className="container">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr />
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
        </div>
      </Router>

      <Button variant="contained" color="primary" onClick={handleClick} sx={{display: "block", margin: "0 auto"}}>Now PLaying</Button>
      {movies}
    </>
  )
}

export default App;
