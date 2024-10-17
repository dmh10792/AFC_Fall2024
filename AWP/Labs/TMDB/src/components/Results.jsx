import './Results.css';
import { useState } from 'react';

const Results = ({cards} = props) => {

    return (
        <div className="cardContainer">
            {cards}
        </div>
    )
}

export default Results;