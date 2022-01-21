import React,{useState} from 'react';
import axios from 'axios';
export const Products = () => {
    const [products, setproducts] = useState([]);
    const getProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data);
            setproducts(res.data)
        },[])
    }
  return <div>
      <h2>Products Component</h2>
      <button onClick={getProducts}>Click</button>
      {products.map((product)=>{
          return <ul>
              <li>Description  : {product.description}</li>
              <li>Id : {product.id}</li>
              <li>Title : {product.title}</li>
              <li>Price : {product.price}</li>
              <li>Category : {product.category}</li>
              <li>Count : {product.rating.count}</li>
              <li><img src={product.image} alt=""  style={{height : "100px", width:"100px"}} /></li>
          </ul>
      })}
  </div>;
};
