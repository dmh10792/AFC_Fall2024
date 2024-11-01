//UTILITY
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Game, Movie, Book} from "./types.js";

//COMPONENTS
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPage from "./components/AddPage.jsx";
import MovieCard from "./components/MovieCard.jsx";

//CSS
import './App.css';



function App() {

    const [recentGames, setRecentGames] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [books, setBooks] = useState([]);

    const date = new Date();
    const currentDate = new Date().toJSON().slice(0, 10);
    const pastDate = `${date.getFullYear()}-${('0'+(date.getMonth()-2)).slice(-2)}-${date.getDate()}`;

    const gameAPIBaseURL = "https://api.rawg.io/api";
    const movieAPIBaseURL = "https://api.themoviedb.org/3";
    const locAPIBaseURL = "https://www.loc.gov"
    const locAPIPostfix = "?fo=json"
    const { RAWG_API_KEY } = process.env;
    const { VITE_TMDB_API_TOKEN } = process.env;

    useEffect( () => {
        //getGenres();
        getRecentGames();
        getNowPlaying();
        getBooks();
    }, []);

    const getRecentGames = () => {

        if (recentGames.length !== 0) return;

        let route  = "games";
        let endpoint = `${gameAPIBaseURL}/${route}?key=${RAWG_API_KEY}&dates=${pastDate},${currentDate}&page_size=5`;

        axios
            .get(endpoint)
            .then(response => {
                let temp = response.data.results;
                console.log(response);
                let gameArray = temp.map((game) => {
                    let genres = game.genres.map(genre => {
                        return genre.name;
                    })
                    return new Game(game.id, game.name, game.background_image, null,
                        game.rating, game.ratings_count, game.released, null, genres, null);
                })
                setRecentGames(gameArray);
                //console.log(gameArray);
            })
            .catch(error => console.log(error.message));
    }

    const getNowPlaying = () => {
        //console.log("Now Playing");

        if (nowPlaying.length !== 0) return;

        let nowPlayingRoute = "movie/now_playing";
        let endpoint = `${movieAPIBaseURL}/${nowPlayingRoute}`;

        let options = {
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
              return new Movie(movie.id, movie.title, `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
                  movie.overview, (movie.vote_average/2.5)+1, movie.vote_count, movie.release_date, movie.genre_ids,
                  null)
            });
            setNowPlaying(movieArray);
            //console.log(movieArray);
          })
          .catch(error => {
              console.log(error.message)
            // setErrorMessage(error.message);
            // navigate('/Error');
          });
    }

    const getGenres = () => {
        if (genres.length !== 0) return;

        let genreRoute = "genre/movie/list";
        let endpoint = `${movieAPIBaseURL}/${genreRoute}`;

         let options = {
          method: 'GET',
          url: endpoint,
          params: {language: 'en-US'},
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
          }
        };

         axios
          .request(options)
          .then(res => {
              setGenres(res.data);
          })
          .catch(err => console.error(err));

    }

    const getBooks = () => {

        if (books.length !== 0) return;

        let endpoint = `${locAPIBaseURL}/collections/selected-digitized-books/${locAPIPostfix}&c=5`;

        axios
            .get(endpoint)
            .then(response => {
                //console.log(response.data.results);
                let bookArray = response.data.results.map((book) => {
                    return new Book(book.number_lccn[0], book.title, book.image_url[0], book.item.contributors[0],
                        book.item.medium[0], book.description[0], book.date, book.url, null, null)
                })
                //console.log(bookArray);
                setBooks(bookArray);
            })
            .catch(error => console.log(error.message));
    }

  return (
    <>
      <Router>
            <NavBar/>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/addPage'
                     element={
                        <AddPage
                            games={recentGames}
                            movies={nowPlaying}
                            genres={genres}
                            books={books}
                        />}
              ></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
