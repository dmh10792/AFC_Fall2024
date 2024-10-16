import { useState } from 'react'
import {BrowserRouter as Router,  Route, Routes, Link} from 'react-router-dom';

//Components
import Results from "./components/Results"
import Error from "./components/Error"
import NavBar from "./components/NavBar"
import Home from "./components/Home"

//CSS
import './App.css'
import Theme from './components/ui/Theme';

function App() {
  const [cards, setCards] = useState([]);
  return (
    <>
      <Router basename='/'>
        <div className="App">
        <Theme>
          <NavBar setCards={setCards}/>
        </Theme>  
          <div className="container">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/results" element={<Results cards={cards}/>}/>
              <Route path="/error" element={<Error/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
