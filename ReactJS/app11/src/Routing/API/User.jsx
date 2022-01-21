import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const User = () => {
    const [user,setuser]=useState([])
    useEffect(()=>{
        axios.get("http://filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(({data})=>{
            console.log(data)
            setuser(data)
        })
    },[])
  return <div>
      {user.map((ur)=>{
          return <li>{ur.email}-{ur.password}</li>
      })}
  </div>
};
