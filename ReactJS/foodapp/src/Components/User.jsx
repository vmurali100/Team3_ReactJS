import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
export const User = () => {
    const [users, showUsers] = useState([])
    const[user,setUsers]=useState([])
    const getUserData = () => {

        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data);
            setUsers(res.data)
            localStorage.setItem("users",JSON.stringify(res.data))
        })
    }
    useEffect(() => {
        axios.get("http://localhost:3000/users").then((res)=>{
            console.log(res.data);
            showUsers(res.data)
            localStorage.setItem("users",JSON.stringify(res.data))
        })
      }, []);
    return <div>
        <h3>User Component</h3>
        <button onClick={getUserData}>Get data</button>
        {console.log(users)}
        <h4>To view User by Id</h4>
        {user.map((us) => {
            return (
                <ul>
                    <li>ID : {us.id}</li>
                    <li>UserName : {us.username}</li>
                    <li>Email : {us.email}</li>
                    <li>Password : {us.password}</li>
                    <li>HouseNo :{us.address.houseno}</li>
                    <li>Street : {us.address.street}</li>
                    <li>City : {us.address.city}</li>
                    <li>State : {us.address.state}</li>
                    <li>Zip : {us.address.zip}</li>
                </ul>
            )

        })}
         <ul>
          {users.map((user)=>{
              return <li><Link to={`/users/${user.id}`}>{user.id}</Link></li>
          })}
      </ul>
       
    </div>;
};
