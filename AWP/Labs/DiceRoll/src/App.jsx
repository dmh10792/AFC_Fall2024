import { useState, useEffect } from 'react'
import {randomNumGenerator} from './helper'
import './App.css'
import Dice from './components/Dice';

function App() {

  const [number, setNumber] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();

  const handleClick = () => {
    changeDiceState();
  }

  useEffect(() => {
    changeDiceState();
  }, []);

  const changeDiceState = () => {
    let newNum1 = randomNumGenerator();
    setNum1(newNum1);
    let newNum2 = randomNumGenerator();
    setNum2(newNum2);
    let result = newNum1 + newNum2
    setNumber(result);
  }

  return (
    <>
      <h1>Roll of the Dice</h1>
      <div>
        <Dice diceNum={num1}/>
        <Dice diceNum={num2}/>
      </div>
      <h2>Roll equals {number}</h2>
      <button onClick={handleClick}>Click to Roll</button>
    </>
  )
}

export default App
