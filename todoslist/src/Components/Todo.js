import React from 'react'

export default function Todo({todo,onDelete}) {
    return (
      <div className="card">
      <div className="card-header">
      <h5> {todo.task}</h5> 
      </div>
      <div className="card-body">
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

      </div>
    </div>
      
        
    )
}
