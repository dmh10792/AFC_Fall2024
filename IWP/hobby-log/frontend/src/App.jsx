//UTILITY
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Game, Movie, Book, Series, Genre} from "./types.js";
import {
    saveGameGenre,
    saveMovieGenre,
    getAllMovieGenres,
    getAllGameGenres,
    saveSeriesGenre, getAllSeriesGenres
} from "./clients/GenreClient.js";

//COMPONENTS
import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import AddPage from "./components/AddPage.jsx";

//CSS
import './App.css';



function App() {

    const [recentGames, setRecentGames] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [popSeries, setPopSeries] = useState([]);
    const [books, setBooks] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [gameGenres, setGameGenres] = useState([]);
    const [seriesGenres, setSeriesGenres] = useState([]);

    const date = new Date();
    const currentDate = new Date().toJSON().slice(0, 10);
    const pastDate = `${date.getFullYear()}-${('0'+(date.getMonth()-2)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

    const gameAPIBaseURL = "https://api.rawg.io/api";
    const movieAPIBaseURL = "https://api.themoviedb.org/3";
    const locAPIBaseURL = "https://www.loc.gov"
    const locAPIPostfix = "?fo=json"
    const { RAWG_API_KEY } = process.env;
    const { VITE_TMDB_API_TOKEN } = process.env;

    useEffect( () => {
        //getMovieGenres(); //only need to do once ever to get them into the DB
        //getGameGenres(); //only need to do once ever to get them into the DB
        //getSeriesGenres(); //only need to do once ever to get them into the DB
        getMovieGenresfromDB();
        getGameGenresfromDB();
        getSeriesGenresfromDB();
        getRecentGames();
        getNowPlaying();
        getBooks();
        getPopularSeries();
    }, []);

    const getRecentGames = () => {

        if (recentGames.length !== 0) return;

        let route  = "games";
        let endpoint = `${gameAPIBaseURL}/${route}?key=${RAWG_API_KEY}&dates=${pastDate},${currentDate}&page_size=10`;

        axios
            .get(endpoint)
            .then(response => {
                let temp = response.data.results;
                //console.log(response);
                let gameArray = temp.map((game) => {
                    let genres = game.genres.map(genre => {
                        return genre;
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
          })
          .catch(error => {
              console.log(error.message)
          });
    }

    const getPopularSeries = () => {
        //console.log("Popular series");

        if (popSeries.length !== 0) return;

        let popSeriesRoute = "tv/popular";
        let endpoint = `${movieAPIBaseURL}/${popSeriesRoute}`;

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
            //console.log(response.data.results);
            let seriesArray = response.data.results.map((show) => {
              return new Series(show.id, show.name, `https://image.tmdb.org/t/p/w200${show.poster_path}`,
                  show.overview, (show.vote_average/2.5)+1, show.vote_count, show.first_air_date, show.genre_ids,
                  null, null, null)
            });
            setPopSeries(seriesArray);
              //console.log(seriesArray);
          })
          .catch(error => {
              console.log(error.message)
            // setErrorMessage(error.message);
            // navigate('/Error');
          });
    }

    // eslint-disable-next-line no-unused-vars
    const getMovieGenres = () => {


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
              let temp = res.data.genres;
              temp.forEach((genre) => {
                  saveMovieGenre(genre);
              })
          })
          .catch(err => console.error(err));

    }

    // eslint-disable-next-line no-unused-vars
    const getSeriesGenres = () => {


        let genreRoute = "genre/tv/list";
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
              //console.log(res.data);
              let temp = res.data.genres;
              temp.forEach((genre) => {
                  saveSeriesGenre(genre);
              })
          })
          .catch(err => console.error(err));

    }

    // eslint-disable-next-line no-unused-vars
    const getGameGenres = () => {
        //if (genres.length !== 0) return;

        let genreRoute = "genres";
        let endpoint = `${gameAPIBaseURL}/${genreRoute}?key=${RAWG_API_KEY}`;

        axios
            .get(endpoint)
            .then(response => {
                let temp = response.data.results;
                let genres = temp.map((obj) => {
                    return new Genre(obj.id, obj.name);
                })
                genres.forEach((genre) => {
                    saveGameGenre(genre);
                })
            })
            .catch(error => console.log(error.message));

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
                        parseInt(book.item.medium[0]), book.description[0], book.date, book.url, null, null)
                })
                //console.log(bookArray);
                setBooks(bookArray);
            })
            .catch(error => console.log(error.message));
    }

    const getMovieGenresfromDB = async () => {
        await getAllMovieGenres().then((response) => {
            setMovieGenres(response.data);
        });
    }

    const getGameGenresfromDB = async () => {
        await getAllGameGenres().then((response) => {
            setGameGenres(response.data);
        });
    }

    const getSeriesGenresfromDB = async () => {
        await getAllSeriesGenres().then((response) => {
            setSeriesGenres(response.data);
        });
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
                            books={books}
                            shows={popSeries}
                            movieGenres={movieGenres}
                            gameGenres={gameGenres}
                            seriesGenres={seriesGenres}
                        />}
              ></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
