import { useState } from "react";
import {personObj, greeting} from "./helper";
import './App.css'

const App = () => {

  /*Method 1*/
  // const [fname, setFname] = useState("Desmond");
  // const [age, setAge] = useState(31);
  // const [pw, setPw] = useState("");

  /*Method 2*/
  // const [person, setPerson] = useState({
  //   fname: "Desmond",
  //   age: 31,
  //   pw: ""
  // });

  /*Method 3*/
  // const personObj = {
  //   fname: "Desmond",
  //   age: 31,
  //   pw: ""
  // };

  const [person, setPerson] = useState(personObj);

  return (
    <div>
        <form action="/getdata" method="get">
        <h1>{greeting(person)}</h1>
          <label>Name:
            <input type="text"/>
          </label>
          <label>Age:
            <input type="number"/>
          </label>
          <label>Password:
            <input type="password"/>
          </label>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default App;