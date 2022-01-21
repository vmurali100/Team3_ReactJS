import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Todos = () => {
    const [todo, settodo] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(({data})=>{
     console.log(data);
     settodo(data)
        })
    },[])
  return <div>
<h2>Hello from Todos component</h2>
{todo.map((td,i)=>{
    return <li key={i}><b>Id:</b>{td.id} <br />
    <span><b>Title:</b>{td.title}</span> <br />
    <span><b>Completed:</b>{td.completed ?  "true":"false"}</span> </li>
})}
  </div>;
};
