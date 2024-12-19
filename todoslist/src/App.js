import './App.css';
import React, { useState,useEffect } from 'react';
import Header from './Components/Header';
import {Todos} from './Components/Todos';
import {AddTodo} from './Components/AddTodo';
import {Footer} from './Components/Footer';
import { About } from "./Components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("I am Del",todo)

    setTodos(todos.filter((e)=>
    {
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0)
    {
    sno=1;
    }
    else{
    sno=todos[todos.length-1].sno+1;
    }
    
    // console.log("add todo",title,desc,sno);

    const myTodo={
      sno:sno,
      task:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
  }
  
  
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos)) 
  }, [todos])
  return (
   <>
   <Router>
   <Header title="To-Do@Sourav" searchBar={false}/>
   <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
              <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>)
          }}>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>

        </Switch>
 
   
   <Footer/>
   </Router>
   </>
  );
}

export default App;
