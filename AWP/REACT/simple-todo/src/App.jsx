import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState(' ')

  const TodoItem = ({text}) => {
    return <li>{text}</li>
  }

  const handleSubmit = (event) => {
      event.preventDefault()//preventing the page from refreshing
      const newTodos = [...todos, newTodo]//creates a new array that includes the old one and adds a new
      setTodos(newTodos)//sets the todos to the new array
      setNewTodo("")//resets the newToDo
      console.log(todos)
  }

  const handleChange = (event) => {
      setNewTodo(event.target.value)
      
  }

  return (
    <>
    <h1>To Do</h1>
     <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="todo-input"
        autoComplete='off' 
        placeholder='What needs to be done'
        onChange={handleChange}
      />
      <button 
        type="submit" 
        className="save-button"
      >Save</button>
     </form>

     <div className="todo-content">
      <ol>

      </ol>
     </div>
    </>
  )
}

export default App
