import { useState, useEffect } from "react";
import TodoImput from "./components/TodoImput"
import TodoList from "./components/TodoList"


function App() {
  const [inputValue, setInputValue] = useState("");

  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodo) => {
    const newList = todos.concat(newTodo);
    setTodos(newList);
    persistData(newList);
  };

  const deleteTodo = (index) => {
    const newArray = todos.filter((value, todoIndex) => todoIndex !== index);
    setTodos(newArray);
    persistData(newArray);
  }

  const editTodo = (index) => {
    setInputValue(todos[index]);
    deleteTodo(index);
  }

  useEffect(()=>{
    if(!localStorage){
      return;
    }
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  },[])

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos: newList}));
  }

  return (
    <>
      <TodoImput addTodo = {addTodo} inputValue={inputValue} setInputValue={setInputValue}/>
      <TodoList 
        todos = {todos}
        deleteTodo = {deleteTodo} 
        editTodo = {editTodo}
      />
    </>
  )
}

export default App
