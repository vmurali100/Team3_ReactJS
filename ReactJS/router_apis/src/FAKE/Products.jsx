import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const Products = () => {
    const[prdt,setprdt]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(({data})=>{
            console.log(data);
            setprdt(data)
        })
    },[])
  return <div>
      <h2>Hello from Products Component</h2>
      {prdt.map((pr)=>{
        return<li><span><b>Id:</b>{pr.id}</span> <br />
        <span><b>Title:</b>{pr.title}</span> <br />
        <span><b>Price:</b>{pr.price}</span> <br />
        <img src={pr.image} alt=""  height="100px" width="100px" /> <hr /> </li> 
      })}
  </div>;
};
