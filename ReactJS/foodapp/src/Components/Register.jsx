import React, { useState } from 'react';
import axios from 'axios';


export const Register = () => {
  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    address: {
      houseno: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    }

  })
  const [users, setUsers] = useState([])

  const displayValues = () => {
    let newUser = [...users]
    newUser.push(user)
    // console.log(newUser);
    axios.post("http://localhost:3000/users", user).then((res) => {
      console.log("post updated")

    })
    setUsers(newUser)
  }
  const getValues = () => {
    console.log(user);
    
  }
  const handleValues = (e) => {
    let newUser = { ...user }
    newUser[e.target.name] = e.target.value
    // console.log(newUser);
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
 
  return <div>
    <h2>Register Component</h2>
    <div className="container">
      <form style={{ width: "500px" }}>
        <div className="formcontainer">
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="number" className="form-control" name="id" value={user.id} aria-describedby="emailHelp" onChange={(e) => { handleValues(e) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">UserName</label>
            <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => { handleValues(e) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => { handleValues(e) }} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => { handleValues(e) }} />
          </div>
          <div className="address">
            <div className="mb-3">
              <label htmlFor="houseno" className="form-label">House No</label>
              <input type="number" className="form-control" name="houseno" value={user.address.houseno} onChange={(e) => { handleAddressChange(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="street " className="form-label">Street</label>
              <input type="text" className="form-control" name="street" value={user.address.street} onChange={(e) => { handleAddressChange(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <input type="text" className="form-control" name="city" value={user.address.city} onChange={(e) => { handleAddressChange(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="state" className="form-label">State</label>
              <input type="text" className="form-control" name="state" value={user.address.state} onChange={(e) => { handleAddressChange(e) }} />
            </div>
            <div className="mb-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" name="zip" value={user.address.zip} onChange={(e) => { handleAddressChange(e) }} />
            </div>

          </div>
          <button type='button' onClick={getValues} className="btn btn-primary">Submit</button><br /> <br />

        </div>
      </form>
      <button type='button' className="btn btn-primary" onClick={displayValues}>Register Data</button>

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
              <td>{us.id}</td>
              <td>{us.username}</td>
              <td>{us.email}</td>
              <td>{us.password}</td>
              {/* <td>{us.address.houseno}</td>
              <td>{us.address.street}</td>
              <td>{us.address.city}</td>
              <td>{us.address.state}</td>
              <td>{us.address.zip}</td> */}
             
              {/* <td>{us.address.street}</td>


              <td>{us.address.city}</td>
              <td>{us.address.state}</td>
              <td>{us.address.zip}</td> */}
            </tr>
          })}
        </tbody>
      </table>
    </div>

  </div>;

};
