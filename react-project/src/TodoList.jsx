import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const changeEventHandler = (e) => {
    setValue(e.target.value);
  };
  const submitHandler = (e) =>{
    e.preventDefault()
    if (value.trim()) {
        
    }
    setTodos([...todos, value])
    setValue('')
  }
  return <form onSubmit={submitHandler}>
    <input type="text" value={value} placeholder="Enter the task" name="task" onChange={changeEventHandler}/>
    <button type="submit">Add</button>
    <ul>
        {todos.map((todo, index)=>{
            return(
                <li key={index}>{todo}</li>
            )
        })}
    </ul>
  </form>;
};

export default TodoList;
