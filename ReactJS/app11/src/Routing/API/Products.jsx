import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Products = () => {
  const [products, setproducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({ data }) => {
      console.log(data);
      setproducts(data)
    })
  }, [])
  return <div>
    {/* {products.map((prd)=>{
          return <li><i>{prd.title}</i></li>
      })} */}
    <table class="table table-dark table-striped">
      <div className="container">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">title</th>
          <th scope="col">description</th>
          <th scope="col">image</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prd) => (

          <tr>
            <td>{prd.id}</td>
            <td>{prd.title}</td>
            <td>{prd.description}</td>
            <td><img src={prd.image} alt="" width="50px" height="50px" /></td>
          </tr>


        ))}

      </tbody>
      </div>
      
    </table>
  </div>
};
