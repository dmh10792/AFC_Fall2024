//UTILITY

//COMPONENTS
import GameCard from './GameCard.jsx';
import MovieCard from "./MovieCard.jsx";
import SeriesCard from "./SeriesCard.jsx";
import BookCard from "./BookCard.jsx";
import CustomCard from "./CustomCard.jsx";
import AddCard from "./AddCard.jsx";

//CSS
import './css/Home.css'




const Home = () => {
    return (
        <div className='home-container' style={{}}>
            <h1 className='home-app-header'>Your Hobby log</h1>
            {/*<GameCard/>*/}
            {/*<MovieCard/>*/}
            <SeriesCard/>
            {/*<BookCard/>*/}
            <CustomCard/>
            <AddCard/>
        </div>
    )
}

export default Home;