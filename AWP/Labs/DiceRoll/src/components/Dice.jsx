import './Dice.css'
import {numArray} from '../helper'
import { useState, useEffect } from 'react'

const Dice = ({diceNum}) => {

    const [diceClass, setDiceClass] = useState(" ");
    
    useEffect(() => {
        setDiceClass(`fas fa-dice-${numArray[diceNum-1]}`)
    });

    return <i className={diceClass}></i>
}

export default Dice