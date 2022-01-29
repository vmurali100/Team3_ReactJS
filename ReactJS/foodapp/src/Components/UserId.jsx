import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { useParams } from 'react-router-dom';
export const UserId = () => {
    const [user, setUser] = useState({});

    let params = useParams()
    console.log("params", params);
    // console.log(allUser);
    useEffect(() => {

        let allUser = JSON.parse(localStorage.getItem("users"))
        var sUser = allUser.find((per) =>
            per.id == params.userid

        )
        setUser(sUser)
        console.log(allUser);

    }
        , []);


    const handleAddress = (address) => {
        let addressDetails = "Address - " + '';

        for (let a in address) {
            addressDetails += a + " : " + address[a] + " , ";
        }
        console.log(addressDetails);
        return addressDetails;

    };
    const showcreateUser = () => {
        let newUser = {
          id: '',
          name: '',
          email: '',
          phone: '',
        };
        setUser(newUser);
        
      };
    const deleteButton = (user) => {
        console.log(user);
        axios.delete('http://localhost:3000/users/' + user.id)
            .then((res) => {
                console.log(res);

            });
            showcreateUser()
    }
    return <div><h2>User Id Component</h2>
        {/* {console.log(user)} */}

        {/* {user.id} */}
        <ul>

            <li>Id : {user.id}</li>
            <li>UserName : {user.username}</li>
            <li>Email : {user.email}</li>
            <li>Password : {user.password}</li>
            <li>{handleAddress(user.address)}</li>
            <button
                className="btn btn-danger"
                onClick={() => {
                    deleteButton(user);
                }}
            >
                Delete
            </button>
            {/* <li>HouseNo : {user.address.houseno}</li> */}
            {/* <li>Street : {user.address.street}</li>
            <li>City : {user.address.city}</li>
            <li>State : {user.address.state}</li>
            <li>Zip : {user.address.zip}</li> */}

        </ul>
    </div>;
};
