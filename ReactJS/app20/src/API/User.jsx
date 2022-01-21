import axios from 'axios';
import React, { useState } from 'react';
export const User = () => {
    const [users,setUsers]=useState([])
    const displayData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        },[])
    }
  return <div>
      <h2>Users Component</h2>
      <button onClick={displayData}>Click </button>
     
      {users.map((user,i)=>(
           <ul>
            <li key={user}>Id : {user.id}</li>
            <li key={user}>User Id : {user.userId}</li>
            <li key={user}> Title : {user.title}</li>
            <li key={user}>Body : {user.body}</li>
            <br />
            </ul>
      ))}
      
  </div>;
};
