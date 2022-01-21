import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Users = () => {
  const [users, setusers] = useState([]);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
        console.log(data)
        setusers(data)
      })
    }, []);

  
  return (
    <div>

      {users.map((urs, i) => {
        return <p key={i}>{urs.name}</p>

        
      })}

    </div>
  )
};
