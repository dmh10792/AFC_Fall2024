
import {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDesc: 'Feed Puppy', rowAssigned: 'User 1'},
    {rowNumber: 2, rowDesc: 'Water Plants', rowAssigned: 'User 2'},
    {rowNumber: 3, rowDesc: 'Make dinner', rowAssigned: 'User 1'},
    {rowNumber: 4, rowDesc: 'Unlock Garage', rowAssigned: 'User 3'},
  ]);

  const addTodo = () => {
    if(todos.length>0) {
      const newTodo = {
        rowNumber: todos.length+1,
        rowDesc: 'New Todo',
        rowAssigned: 'User 3'
      }
      setTodos(todos => [...todos, newTodo]); //useState on an array with the spread operator
    }
    
  }

  return (
    <div className='mt-5 container'>
        <div className='card'>
          <div className='card-header'>
            Your Todo's
          </div>
          <div  className='card-body'>
          <TodoTable todos={todos}/>
          <button 
            className='btn btn-primary'
            onClick={addTodo}
          >
            Add new todo
          </button>
          </div>
        </div>
    </div>
  );
}

export default App;
