//UTILITY
import {useEffect, useState} from "react";

//COMPONENTS
import GameCard from "./GameCard.jsx";
import MovieCard from "./MovieCard.jsx";
import BookCard from "./BookCard.jsx";

//CSS

const AddPage = ({games, movies, genres, books}) => {

    useEffect(() => {
        //setMovieGenres();
    }, []);

    const setMovieGenres = () => {
        if (genres.length === 0 || movies.length === 0) return;
        console.log('line 18')
        if (movies[0].genres[0] instanceof String)
        console.log('line 20')

        //console.log(movies);

            for (let i = 0; i < movies.length; i++) {//for each movie
                let movieGenres = [];
                for (let j = 0; j < movies[i].genres.length; j++){//for each genre for that movie
                    for (let i1 = 0; i1 < genres.length; i1++){
                        const genreObj = genres[i1];
                        if (genreObj.id === movies[i].genres[j]) {
                            movieGenres.push(genreObj.name);
                        }
                    }
                }
                movies[i].genres = movieGenres;
                console.log(movies[i].genres);
            }

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