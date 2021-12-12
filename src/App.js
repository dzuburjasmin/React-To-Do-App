import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {

  const [inputText, setInputText]=useState('');
  const [todos, setTodos]=useState([]);
  const[status, setStatus]=useState('all');
  const [filteredTodos, setFilteredTodos]= useState([]);
    
  useEffect(()=>{
    getFromLocal();
  },[]);
 
  useEffect(()=>{
    filterHandler();
    saveToLocal();
  },[todos,status]);

  function filterHandler(){
    switch(status){
      case 'checked':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
      case 'unchecked':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  function saveToLocal(){

      localStorage.setItem('todos',JSON.stringify(todos));   
  }
  function getFromLocal(){
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    } else {
     let localtodo= JSON.parse(localStorage.getItem("todos"))
     setTodos(localtodo);
    }
  }
  return (
    <div className="App">
      <header>
      <h1>React To-Do List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} />
      <List todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
