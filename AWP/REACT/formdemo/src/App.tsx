import { useState } from 'react'
import './App.css'

type Person = {//can put in a helper file
  fname: string;
  lname: string;
  age: number;
}

const initPerson = (): Person => {//can put in a helper file
  return {
    fname: "",
    lname: "",
    age: 21
  }
}

function App() {
  const [personData, setPersonData] = useState<Person>(initPerson())


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPersonData({...personData,[event.target.name]: event.target.value}); //spread operator to prevent overwriting
    //console.log(personData);
    
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(personData);
    
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label>First Name:
          <input onChange={handleChange} autoComplete="off" type="text" name="fname" id="fname" value={personData.fname} minLength={2} maxLength={20} required/>
        </label>
        <label>Last Name:
          <input onChange={handleChange} autoComplete="off" type="text" name="lname" id="lname" value={personData.lname} minLength={2} maxLength={20}/>
        </label>
        <label>Age:
          <input onChange={handleChange} autoComplete="off" type="number" name="age" id="age" value={personData.age} min={21} max={99} required/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
