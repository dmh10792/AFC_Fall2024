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



const Home = () => {

    const [backlog, setBacklog] = useState([]);

    useEffect(() => {
        getBacklog();
    }, []);


    const getBacklog = () => {

        if (backlog.length !== 0) return;

        getAllGames().then((data) => {
            let tempGames = data.map((game) => {
                return <GameCard key={game.id} game={game}/>
            })
            setBacklog([...backlog, tempGames]);
        })

        getAllSeries().then((data) => {
            let tempShows = data.map((show) => {
                return <SeriesCard key={show.id} show={show}/>
            })
            setBacklog([...backlog, tempShows]);
        })

        getAllBooks().then((data) => {
            let tempBooks = data.map((book) => {
                return <BookCard key={book.id} book={book}/>
            })
            setBacklog([...backlog, tempBooks]);
        })

    }

    return (
        <div className='home-container' style={{}}>
            <h1 className='home-app-header'>Your Hobby log</h1>

            {backlog.map((card) => {
                return card;
            })}
            {console.log(backlog)}
            <AddCard/>
        </div>
    )
}

export default Home;