//UTILITY

//COMPONENTS
import GameCard from './GameCard.jsx';
import MovieCard from "./MovieCard.jsx";
import SeriesCard from "./SeriesCard.jsx";

//CSS
import './css/Home.css'


const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='home-app-header'>Your Hobby log</h1>
            <GameCard/>
            <MovieCard/>
            <SeriesCard/>
        </div>
    )
}

export default Home;