//UTILITY

//COMPONENTS
import GameCard from './GameCard.jsx';

//CSS
import './css/Home.css'


const Home = () => {
    return (
        <div className='home-container'>
            <h1 className='home-app-header'>Your Hobby log</h1>
            <GameCard/>
            <GameCard/>
            <GameCard/>
        </div>
    )
}

export default Home;