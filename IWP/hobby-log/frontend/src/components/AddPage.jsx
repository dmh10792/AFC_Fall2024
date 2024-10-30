//UTILITY
import {useState} from "react";

//COMPONENTS
import GameCard from "./GameCard.jsx";

//CSS

const AddPage = ({games}) => {

    return (
        <div style={{width: '95vw', margin: '70px auto', textAlign: 'center' }}>
            <h1 className='page-header'>Add games to your backlog</h1>
            {games.map((game) => {
                return (
                <GameCard
                    key={game.id}
                    game={game}
                />
            )
            })}
        </div>
    )
}

export default AddPage;