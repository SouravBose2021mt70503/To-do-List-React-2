import React, { useState } from 'react';

export const AddTodo = (props) => {
    let addStyle={
        marginTop:'8px',
        position:'relative',
        width:'80%',
        marginLeft:'10%'
    }
    let btnStyle={
        position:'relative',
        marginLeft:'10%',
        marginTop:'8px'
    }

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("Title or Description cannot be blank");
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    
    return (
        <div>
             <h3 className="text-center my-3">My To-Do List</h3>
            <hr/>
            <hr/>
            <h3 className='container my-3'>Add To-do</h3>
            <form onSubmit={submit}>
            <div className="input-group input-group-lg" style={addStyle}>
                <span className="input-group-text" id="inputGroup-sizing-lg">Heading</span>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
            </div>
            <div className="input-group input-group-lg" style={addStyle}>
                <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <button type='submit'className="btn btn-outline-success " style={btnStyle}>Submit</button>
            </form>
        </div>
    )
}
