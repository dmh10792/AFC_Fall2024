import { useState, useEffect } from 'react'
import { Stack, Button } from '@mui/material';
import axios from "axios"
import DogImageCard from './components/DogImageCard';
import './App.css'

const App = () => {
  //consume an api
    //http request(axios)
      /*fetch example
      fetch(endpoint)
      .then(response) - get a response 
      .then(parseData) - parse if good/ do something with the data
      .catch(error) - handle errors
      */

     /* axios example
        axios.method(endpoint) - method is whatever method you are using
        .then(response) - get a response and parse the data
        .then(error) - handle errors
     */
  //click a button
    //get a random image

  const [dogImage, setDogImage] = useState();  

  const endpoint = `https://dog.ceo/api/breeds/image/random`; //create an endpoint variable

  useEffect(() => {
    getImage()
  }, []);
  
  const handleClick = () => {
    getImage()
  };  

  const getImage = () => {
    axios
      .get(endpoint)
      .then(response => setDogImage(response.data.message))
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  }

  return (
    <>
      <h1>Random Doogie</h1>
      <Button onClick={handleClick} variant="contained" color="success" size="large">
        Click Me
      </Button>
      <DogImageCard imgPath={dogImage}/>

      <Stack direction="row" spacing={2}>
      <Button color="warning">Secondary</Button>
      <Button variant="contained" color="primary">
        Success
      </Button>
      <Button variant="contained" color="error" size='small'>
        Error
      </Button>
    </Stack>
    </>
  )
};

export default App;
