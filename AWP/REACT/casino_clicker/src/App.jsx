import { useState } from "react";
import './App.css';


const App = () => {

  const [randomNum, setNumber] = useState();
  const [winText, setText] = useState();
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => {
    let newNum = Math.floor(1 +  Math.random() * (10));
    if (newNum == 7) {
      setText("You Win!");
      setShowButton(!showButton);
    }
    setNumber(newNum);
  }

  return (
    <>
      <h1>{randomNum}</h1>
      <h1>{winText}</h1>
      {showButton && <button onClick={handleClick}>Generate Number</button>}
    </>
  );
};

export default App;