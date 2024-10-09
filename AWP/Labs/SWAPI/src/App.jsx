import { useState, useEffect } from 'react'
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
  }

  const handleReset = () => {
    setShowTable(false);
    setTableRows([]);
  }

  const getData = () => {
    axios
      .get(endpoint)
      .then(response => {
        let count = -1;
        let className = "";
        let rowArray = response.data.results.map((char) => {

          count++;

          if(count%2 != 0) {
            className = "oddRow";
          } else {
            className = "evenRow";
          }

          return (
          <tr key={count} className={className}>
            <td>{char.name}</td>
            <td>{char.height} cm</td>
            <td>{char.hair_color}</td>
            <td>{char.gender}</td>
          </tr>)
        })
        setTableRows(rowArray);
      })
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

      {showTable && <MyTable rows={tableRows}/>}
    </>
  )
}

export default App
