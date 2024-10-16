import { useState, useEffect } from 'react'
import InputComp from './components/InputComp'

function App() {
  const [color, setColor] = useState()

  const handleClick = (event) => {
    setColor(event.target.textContent)
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])

  return (
    <div  >
      <p onClick={handleClick} >red</p>
      <p onClick={handleClick} >yellow</p>
      <p onClick={handleClick} >green</p>
    </div>
  )
}

export default App
