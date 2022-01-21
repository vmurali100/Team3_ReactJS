import React,{useState} from 'react';
import axios from 'axios';
export const Carts = () => {
    const [carts, setCarts] = useState([]);
    const getCarts=()=>{
        axios.get("https://fakestoreapi.com/carts").then((res)=>{
            console.log(res.data);
            setCarts(res.data)
        },[])
    }
  return <div>

  <h2>Cart Component</h2>
      <button onClick={getCarts}>Click</button>
      {carts.map((cart)=>{
          return <ul>
              <li>User Id : {cart.userId}</li>
              <li>Id : {cart.id}</li>
              <li>Date : {cart.date}</li>
              <li>Products : {cart.products.productId}</li>

          </ul>
      })}
      </div>

}
