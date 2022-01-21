import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const FakeApiUsers = () => {
    const [user, setuser] = useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/users").then(({data})=>{
            console.log(data)
            setuser(data)
        })
    })
  return <div>
      {user.map((ur)=>{
          return <p>{ur.address.street}</p>
      })}
  </div>
};
