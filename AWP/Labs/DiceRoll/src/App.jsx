import { useState, useEffect } from 'react'
import {randomNumGenerator} from './helper'
import './App.css'
import Dice from './components/Dice';

function App() {

  const [number, setNumber] = useState();
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [showSnakeEyes, setShowSnakeEyes] = useState(false);

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

    if(newNum1 ==1 && newNum2 ==1) {//snake eyes easter egg trigger
      setShowSnakeEyes(true);
    } else {
      setShowSnakeEyes(false);
    }

    let result = newNum1 + newNum2
    setNumber(result);
  }

  return (
    <>
    { showSnakeEyes && <img 
        src="https://unknowncomicbooks.com/cdn/shop/products/126311988_151045946721198_7027687703058560111_n.jpg?v=1614113642" 
        alt="Snake Eyes!!" />}
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
