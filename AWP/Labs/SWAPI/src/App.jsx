import { useState } from 'react'
import './App.css'
import MyTable from './components/MyTable';
import axios from 'axios'

function App() {
  const [showTable, setShowTable] = useState(false);
  const [tableRows, setTableRows] = useState([]);


  const endpoint = "https://swapi.dev/api/people";

  const handleSubmit = () => {
    setShowTable(true);
    getData();
    console.log(tableRows)
  }

  const handleReset = () => {
    setShowTable(false);
    setTableRows([]);
  }

  const getData = () => {
    axios
      .get(endpoint)
      .then(response => setTableRows(response.data.results))
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  }

  return (
    <>
      <h1>SWAPI</h1>
      <h1>The Star Wars API</h1>
      <div className='buttonContainer container'>
        <button id='submitButton' onClick={handleSubmit}>Submit</button>
        <button id='resetButton' onClick={handleReset}>Reset</button>
      </div>

      {showTable && <MyTable/>}
    </>
  )
}

export default App
