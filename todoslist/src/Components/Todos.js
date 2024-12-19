import React from 'react'
import Todo from './Todo'

export const Todos = (props) => {
    let myStyle={
        minHight:"70vh"
    }
    return (
        
       
        <div className="container" style={myStyle}>
           <hr />
            {props.todos.length!==0?
            props.todos.map((todo)=>{
                 return   <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            }):
            <div className="card alert alert-danger">
  <div className="card-body text-center " >
   No todos to Display 
  </div>
</div>
            }
            
            
        </div>
        
    )
}
