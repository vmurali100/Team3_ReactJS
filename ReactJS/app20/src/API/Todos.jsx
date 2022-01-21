import React,{useState} from 'react';
import axios from 'axios';

export const Todos = () => {
  
    const [todos, settodos] = useState([]);
    const getTodos=()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res)=>{
            console.log(res.data);
            settodos(res.data)
        },[])
    }
  return <div>
      <h2>Todos Component</h2>
      <button onClick={getTodos}>Click</button>
      {todos.map((todo)=>{
          return <ul>
              <li>User Id : {todo.userId}</li>
              <li>Id : {todo.id}</li>
              <li>Title : {todo.title}</li>
              <li>Completed : {todo.completed ? "True":"False"}</li>

          </ul>
      })}
  

  </div>;
};