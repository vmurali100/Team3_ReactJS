import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const AllUsers = () => {
    const [allUsers,setAllusers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/register").then((res)=>{
             console.log(res.data);
             setAllusers(res.data)
        })
    },[])
  return <div>
      <table border="1px" >
    <thead>
        <tr>
            <th>Id</th>
            <th>user Name</th>
            <th>Email</th>
            <th>Password</th>
            
                <th>House No</th>
                <th>Street</th>
                <th>city</th>
                <th>state</th>
                <th>zip</th>
        
        </tr>
    </thead>
    <tbody>
        {allUsers.map((usr)=>{
            return(
            <tr>
                <td>{usr.id}</td>
                <td>{usr.userName}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.houseNo}</td>
                <td>{usr.street}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zip}</td>
             </tr>
            )
        })}
    </tbody>
</table> 
  </div>;

};
export default AllUsers