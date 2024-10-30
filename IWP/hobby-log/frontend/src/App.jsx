//UTILITY
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Game} from "./types.js";

//COMPONENTS
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPage from "./components/AddPage.jsx";

//CSS
import './App.css'



function App() {

    const [recentGames, setRecentGames] = useState([]);



    const date = new Date();
    const currentDate = new Date().toJSON().slice(0, 10);
    const pastDate = `${date.getFullYear()}-${('0'+(date.getMonth()-2)).slice(-2)}-${date.getDate()}`;

    const baseURL = "https://api.rawg.io/api";
    const { RAWG_API_KEY } = process.env;

    useEffect(() => {
        getRecentGames();
    }, []);

    const getRecentGames = () => {
        let route  = "games";
        let endpoint = `${baseURL}/${route}?key=${RAWG_API_KEY}&dates=${pastDate},${currentDate}&page_size=10`;

        axios
            .get(endpoint)
            .then(response => {
                let temp = response.data.results;
                let gameArray = temp.map((game) => {
                    let genres = game.genres.map(genre => {
                        return genre.name;
                    })
                    return new Game(game.id, game.name, game.background_image, null,
                        game.rating, game.ratings_count, game.released, null, genres);
                })
                setRecentGames(gameArray);
            })
            .catch(error => console.log(error.message));
    }

  return (
    <>
      <Router>
            <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/addPage' element={<AddPage games={recentGames}/>}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
