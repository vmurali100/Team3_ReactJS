import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const AllUsers = () => {
    const [users, setusers] = useState([])

    const getAllUsers = () => {
        window.location.href = "users"
    }
    useEffect(() => {
        axios.get("http://localhost:3000/users").then((res) => {
            console.log(res.data)
            setusers(res.data)
        })
    }, [])
    return (
        <div>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">username</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">houseno</th>
                        <th scope="col">street</th>
                        <th scope="col">city</th>
                        <th scope="col">state</th>
                        <th scope="col">zip</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>{user.address.houseno}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.state}</td>
                            <td>{user.address.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <button type="button" className="btn btn-primary" onClick={getAllUsers}>allusers</button>
        </div>
    )
};
