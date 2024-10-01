import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // setCount(count + 1)
  useEffect(() => {
    if(count<5){
      setCount(count + 1)
    }
  }, [count])

  return (
    <>
      <h1>My Counter Demo</h1>
      COUNT: {count}
    </>
  )
}

export default App
