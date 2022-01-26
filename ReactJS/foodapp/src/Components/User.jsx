import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const User = () => {
    const [users, showUsers] = useState([])
    const getUserData = () => {

        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data);
            showUsers(res.data)
        })


    }
    return <div>
        <h3>User Component</h3>
        <button onClick={getUserData}>Get data</button>
        {console.log(users)}
        {users.map((us) => {
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
    </div>;
};
