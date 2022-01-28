import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [user, setuser] = useState([]);
    const [users, setusers] = useState({ fname: "", email: "", password: "", address: "" })
    useEffect(() => {
        axios.get(" http://localhost:3000/users").then(({ data }) => {
            setuser(data)
        })
    }, [])
    const handleChange = (e) => {
        let newusers = { ...users }
        newusers[e.target.name] = e.target.value
        setusers(newusers)
    }
    const addUser = () => {
        let newUser = [...user]
        newUser.push(users)
        axios.post("http://localhost:3000/users", users).then((res) => {

        })
        setuser(newUser)
        clearForm();
    }
    const clearForm = () => {
        setusers({ fname: "", email: "", password: "", address: "" })
    }
    const deleteUser = (us) => {
        // console.log(us);
        axios.delete("http://localhost:3000/users/" + us.id).then((res) => {
            console.log(res.data)
            let newData = {...users}

            setusers(newData)
        })
    }
    const editUser = (us, i) => {
        setusers(us, i)
        console.log(us)
    }
    const updateUser = () => {
        let allnewUsers = [...user ]
        axios.put("http://localhost:3000/users/" + allnewUsers.id, users).then((res) => {
            console.log(res)
            setusers({ users: allnewUsers })
            clearForm()
        })

    }
    return <div>
        <form>
            <label htmlFor="fname">First name:</label>
            <input type="text" name="fname" value={users.fname} onChange={(e) => {
                handleChange(e)
            }} /><br /><br />

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={users.email} onChange={(e) => {
                handleChange(e)
            }} /><br /><br />

            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={users.password} onChange={(e) => {
                handleChange(e)
            }} /><br /><br />

            <label htmlFor="address">Address:</label>
            <input type="text" name="address" value={users.address} onChange={(e) => {
                handleChange(e)
            }} /><br /><br />

            <button type='button' onClick={addUser} className="btn btn-primary">add data</button>
            <button type="button" onClick={updateUser} className="btn btn-primary">update user</button>
        </form>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">fname</th>
                    <th scope="col">email</th>
                    <th scope="col">password</th>
                    <th scope="col">address</th>
                    <th scope='col'>delete</th>
                    <th scope='col'>edit</th>
                </tr>
            </thead>

            <tbody>
                {user.map((us, i) => {
                    return (

                        <tr key={i}>
                            <td>{us.fname}</td>
                            <td>{us.email}</td>
                            <td>{us.password}</td>
                            <td>{us.address}</td>
                            <td>
                                <button type="button" onClick={() => deleteUser(us)} className="btn btn-danger">delete</button>
                            </td>

                            <td>
                                <button type="button" onClick={() => editUser(us, i)} className="btn btn-warning">edit</button>
                            </td>

                        </tr>
                    )
                })}

            </tbody>
        </table>
    </div>
}
export default Users
