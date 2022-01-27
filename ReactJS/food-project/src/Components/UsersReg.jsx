import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const UsersReg = () => {
    const [users, setusers] = useState([])
    const [user, setUser] = useState({
        id: "",
        userName: "",
        email: "",
        password: "",
        address: {
            houseNo: "",
            city: "",
            street: "",
            state: "",
            zip: ""
        }
    })
    const handleChange = (e) => {
        let newUser = { ...user }
        newUser[e.target.name] = e.target.value
        setUser(newUser)
    }
    const handleAddressChange = (e) => {
        const newaddress = { ...user }
        let address = user.address;
        var key = e.target.name;
        var value = e.target.value;
        address[key] = value;
        user.address = address;
        setUser(newaddress)
    }
    const addUser = () => {
        let userData = [...users]
        userData.push(user)
        axios.post("http://localhost:3000/register", user).then((res) => {
            console.log(res.data);
            localStorage.setItem("users",JSON.stringify(user))
        })
        setusers(userData)
        alert("your details submittedd")
        clearForm()
        window.location = "http://localhost:3001/users"
    }
    const clearForm = () => {
        setusers({
            id: "",
            userName: "",
            email: "",
            password: "",
            address:{
            houseNo: "",
            city: "",
            street: "",
            state: "",
            zip: ""
            }
        })
    }
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/register").then((res)=>{
    //       setusers(res.data)
    //     },[])
    // })
    return <div>
        <h2>Register Here </h2>
        <form>
            <div className="mb-3">
                <label for="id" className="form-label">Id</label>
                <input type="text" className="form-control" id="" name="id" value={user.id}
                    onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="  userName" className="form-label">UserName</label>
                <input type="text" className="form-control" name="userName" value={user.userName} onChange={(e) => handleChange(e)} />
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => handleChange(e)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => handleChange(e)} />
            </div>

            <div className="address">
                <label>Address:</label><br />
                <label for="houseNo" className="form-label">House No</label>
                <input type="text" className="form-control" name="houseNo" value={user.address.houseNo}
                 onChange={(e) => handleAddressChange(e)} />
            </div>
            <div className="mb-3">
                <label for="street" className="form-label">Street</label>
                <input type="text" className="form-control" name="street" value={user.address.street} 
                onChange={(e) => handleAddressChange(e)} />
            </div>
            <div className="mb-3">
                <label for="city" className="form-label">City</label>
                <input type="text" className="form-control" name="city" value={user.address.city}
                 onChange={(e) => handleAddressChange(e)} />
            </div>
            <div className="mb-3">
                <label for="state" className="form-label">State</label>
                <input type="text" className="form-control" name='state' value={user.address.state}
                 onChange={(e) =>handleAddressChange(e)} />
            </div>
            <div className="mb-3">
                <label for="zip" className="form-label">Zip</label>
                <input type="text" className="form-control" name="zip" value={user.address.zip}
                 onChange={(e) => handleAddressChange(e)} />
            </div>
            <button type="button" className="btn btn-primary" onClick={addUser}>Submit</button>
        </form>

        {/* <table border="1px">
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
        {users.map((usr)=>{
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
</table> */}
    </div>;
};

export default UsersReg