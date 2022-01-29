import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export const User = () => {
    const [users, showUsers] = useState([])
    // const [user, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState({});
    useEffect(() => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data);
            showUsers(res.data)
            localStorage.setItem("users", JSON.stringify(res.data))
        })
    }, []);
    // const getUserData = () => {

    //     axios.get("http://localhost:3000/users").then((res) => {
    //         console.log(res.data);
    //         showUsers(res.data)
    //         localStorage.setItem("users", JSON.stringify(res.data))
    //     })
    // }
    const handleChange = (e) => {
        let newUserDetails = { ...userDetails };
        newUserDetails[e.target.name] = e.target.value;
        setUserDetails(newUserDetails);
    };
    const editButton = (userDetails) => {
        console.log(userDetails);
        setUserDetails(userDetails);

    }
    
    const updateData = () => {
        axios.put('http://localhost:3000/users/' + userDetails.id, userDetails)
            .then((res) => {
                console.log(res);
            });
        setUserDetails(userDetails)
    }
    const handleAddressChange = (e) => {
        const newadd = { ...userDetails }
        let address = userDetails.address;
        var key = e.target.name;
        var value = e.target.value;
        address[key] = value;
        userDetails.address = address;
        // setUserDetails(newadd)
        console.log(newadd);
      }
    return <div>
        <h3>User Component</h3>
        {/* <button onClick={getUserData}>Get data</button> */}
        {console.log(users)}

        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">House No</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map((us) => {
                    return <tr>
                        <td>ID : {us.id}</td>
                        <td>UserName : {us.username}</td>
                        <td>Email : {us.email}</td>
                        <td>Password : {us.password}</td>
                        <td>HouseNo :{us.address.houseno}</td>
                        <td>Street : {us.address.street}</td>
                        <td>City : {us.address.city}</td>
                        <td>State : {us.address.state}</td>
                        <td>Zip : {us.address.zip}</td>
                        <td>
                            <button
                                className="btn btn-warning"
                                onClick={() => {
                                    editButton(us);
                                }}
                            >
                                Edit
                            </button>
                        </td>
                       
                    </tr>
                })}
            </tbody>
        </table>
        {/* <h4>To view User by Id</h4> */}
        {/* {user.map((us) => {
            return (
                <ul>
                    <td>ID : {us.id}</td>
                    <td>UserName : {us.username}</td>
                    <td>Email : {us.email}</td>
                    <td>Password : {us.password}</td>
                    <td>HouseNo :{us.address.houseno}</td>
                    <td>Street : {us.address.street}</td>
                    <td>City : {us.address.city}</td>
                    <td>State : {us.address.state}</td>
                    <td>Zip : {us.address.zip}</td>
                </ul>
            )

        })} */}
        <div className="tableContainer">
            <div className="col">
                {Object.keys(userDetails).length > 0 && (
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                ID
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="id"
                                disabled
                                value={userDetails.id}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                User Name
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="username"
                                value={userDetails.username}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="email"
                                value={userDetails.email}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Password
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="password"
                                value={userDetails.password}
                                onChange={(e) => {
                                    handleChange(e);
                                }}
                            />
                        </div>
                        <div className="addressfield">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                House No
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="houseno"
                                value={userDetails.address.houseno}
                                onChange={(e) => {
                                    handleAddressChange(e);
                                }}
                            />
                        </div>
                        {/* <div class="mb-3"> */}
                            {/* <label for="exampleInputEmail1" class="form-label">
                                Street
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="street"
                                value={userDetails.address.street}
                                onChange={(e) => {
                                    handleAddressChange(e);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                City
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="city"
                                value={userDetails.address.city}
                                onChange={(e) => {
                                    handleAddressChange(e);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                State
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="state"
                                value={userDetails.address.state}
                                onChange={(e) => {
                                    handleAddressChange(e);
                                }}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Zip
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                name="zip"
                                value={userDetails.address.zip}
                                onChange={(e) => {
                                    handleAddressChange(e);
                                }}
                            />
                        </div> */}
                        </div>
                    </form>
                )}
            </div>
        </div>
        <button onClick={updateData} className="btn btn-primary"> Update Data</button>
        <ul>
            {users.map((user) => {
                return <li><Link to={`/users/${user.id}`}>Id : {user.id}</Link></li>
            })}
        </ul>

    </div>;
};
