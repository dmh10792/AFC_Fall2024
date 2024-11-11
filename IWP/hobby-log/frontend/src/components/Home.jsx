//UTILITY
import {useEffect, useState} from "react";

//COMPONENTS
import GameCard from './GameCard.jsx';
import MovieCard from "./MovieCard.jsx";
import SeriesCard from "./SeriesCard.jsx";
import BookCard from "./BookCard.jsx";
import CustomCard from "./CustomCard.jsx";
import AddCard from "./AddCard.jsx";

//CSS
import './css/Home.css'
import {getAllGames} from "../clients/GameClient.js";
import {getAllSeries} from "../clients/SeriesClient.js";
import {getAllBooks} from "../clients/BookClient.js";
import log from "eslint-plugin-react/lib/util/log.js";
import {etEE} from "@mui/material/locale";
import {getAllMovies} from "../clients/MovieClient.js";



const Home = () => {

    const [backlog, setBacklog] = useState([]);

    useEffect(() => {
        getBacklog();
    }, [backlog]);


    const getBacklog = async () => {

        const [games, series, books, movies] = await Promise.all([
            getAllGames(),
            getAllSeries(),
            getAllBooks(),
            getAllMovies()
        ]);

        const gameCards = games.map(game => <GameCard key={game.id} game={game} />);
        const seriesCards = series.map(show => <SeriesCard key={show.id} show={show} />);
        const bookCards = books.map(book => <BookCard key={book.id} book={book} />);
        const movieCards = movies.map(movie => <MovieCard key={movie.id} movie={movie} />);

        setBacklog([...gameCards, ...seriesCards, ...movieCards, ...bookCards]);


    }

    return (
        <div className='home-container' style={{}}>
            <h1 className='home-app-header'>Your Hobby log</h1>

            {backlog.map((card) => {
                return card;
            })}
            <AddCard/>
        </div>
    )
}

export default Home;