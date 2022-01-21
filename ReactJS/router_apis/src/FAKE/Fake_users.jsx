import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';

export const Fake_users = () => {
    const [user, setuser] = useState([]);
    useEffect(()=>{
     axios.get("https://fakestoreapi.com/users").then(({data})=>{
        console.log(data);
        setuser(data)
     })
    })
  return <div>
      <h2>Hello from users component</h2>
      {user.map((usr)=>{
           return <li><b>Id:</b>{usr.id} <br />
           <span><b>userName:</b>{usr.username}</span> <br />
           <span><b>email:</b>{usr.email}</span> <br />
           <span><b>password</b>{usr.password}</span> <hr /> </li>
      })}
  </div>;
};
