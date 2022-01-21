import axios from 'axios';
import React, { useEffect,useState } from 'react';

export const Carts = () => {
    const [cart, setcart] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/carts").then(({data})=>{
            console.log(data)
            setcart(data)
        })
    },[])
  return <div>
      {cart.map((ct)=>{
          return <li>{ct.date}</li>
      })}
  </div>
};
