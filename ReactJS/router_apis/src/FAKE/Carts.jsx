import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const Carts = () => {
    const[cart,setcart]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then(({data})=>{
            console.log(data);
            setcart(data)
        })
    },[])
  return <div>
      <h2>Hello from Carts component</h2>
       {cart.map((ca)=>{
           return <li><b>Id:</b>{ca.id} <br /><span><b>UserId:</b>{ca.userId}</span>
           <br /><span><b>date:</b>{ca.date}</span> <hr /> </li>
       })}
  </div>;
};
