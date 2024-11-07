//UTILITY
import {useEffect, useState} from "react";

//COMPONENTS
import GameCard from "./GameCard.jsx";
import MovieCard from "./MovieCard.jsx";
import BookCard from "./BookCard.jsx";
import SeriesCard from "./SeriesCard.jsx";
import CustomCard from "./CustomCard.jsx";
import AddCard from "./AddCard.jsx";
import log from "eslint-plugin-react/lib/util/log.js";

//CSS

const AddPage = ({games, movies, books, shows, movieGenres, gameGenres, seriesGenres}) => {

    useEffect(() => {
        setMovieGenres();
    }, []);

    const setMovieGenres = () => {

        movies.forEach(movie => {
            let newGenres = [];
            movie.genre_ids.forEach(id => {
                movieGenres.forEach(genre => {
                    if(id === genre.id) {
                        newGenres.push(genre);
                    }
                })
            })
            //console.log(newGenres);
            movie.genres = newGenres;
            //console.log(movie.genres);
        })

        shows.forEach(show => {
            let newGenres = [];
            show.genre_ids.forEach(id => {
                seriesGenres.forEach(genre => {
                    if(id === genre.id) {
                        newGenres.push(genre);
                    }
                })
            })
            //console.log(newGenres);
            show.genres = newGenres;
        })
    }

    return (
        <div style={{width: '95vw', margin: '70px auto', textAlign: 'center'}}>
            <h1 className='page-header'>Add to your backlog</h1>
            <h2 style={{textAlign: 'start'}}>Recently Released Games</h2>
            <hr/>
            {games.map((game) => {
                return (
                    <GameCard
                        key={game.id}
                        game={game}
                    />
                )
            })}

            <h2 style={{textAlign: 'start', marginTop: '20px'}}>Shows</h2>
            <hr/>
            {shows.map((show) => {
                return (
                    <SeriesCard key={show.id} show={show}/>
                )
            })}

            <h2 style={{textAlign: 'start', marginTop: '20px'}}>Now Playing Movies</h2>
            <hr/>
            {movies.map((movie) => {
                return (
                    <MovieCard key={movie.id} movie={movie}/>
                )
            })}

            <h2 style={{textAlign: 'start', marginTop: '20px'}}>Books</h2>
            <hr/>
            {books.map((book) => {
                return (
                    <BookCard key={book.id} book={book}/>
                )
            })}

        </div>
    )
}

export default AddPage;