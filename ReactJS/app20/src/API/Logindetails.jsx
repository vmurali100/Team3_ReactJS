import React from 'react';
import axios from 'axios';
import { useState } from 'react';

export const LoginDetails = () => {
    const [userlogin,showUserDetails]= useState([])
    const getLoginDetails=()=>{
        axios.get("http://www.filltext.com/?rows=10&id=%7Bindex%7D&email=%7Bemail%7D&username=%7Busername%7D&password=%7BrandomString%7C5%7D&pretty=true").then((res)=>{
            console.log(res.data);
            showUserDetails(res.data)
        },[])
          
    }

  return <div>
      <h2>LoginDetails  component</h2>
      <button onClick={getLoginDetails}>Click</button>

      {userlogin.map((login)=>{
          return <ul>
               <li>Id : {login.id} </li>
               <li>email : {login.email}</li>
               <li>userName : {login.username} </li>
               <li>password : {login.password}</li>
          </ul>
       
          
      })}
  </div>;
};