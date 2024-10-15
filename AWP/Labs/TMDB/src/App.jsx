import { useState } from 'react'
import {BrowserRouter as Router,  Route, Routes, Link} from 'react-router-dom';

//Components
import Results from "./components/Results"
import Error from "./components/Error"
import NavBar from "./components/NavBar"

//CSS
import './App.css'

function App() {

  const { VITE_TMDB_API_TOKEN } = process.env;//desctructuring the token from the process

  const baseURL = "https://api.themoviedb.org/3";

  //may need to move these to the individual components
  const nowPlayingRoute = "movie/now_playing";
  const searchRoute = "search/";


  return (
    <>
      <Router basename='/'>
        <div className="App">
          
        <NavBar/>


          <div className="container">
            <Routes>
              <Route path="/results" element={<Results/>}/>
              <Route path="/error" element={<Error/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
