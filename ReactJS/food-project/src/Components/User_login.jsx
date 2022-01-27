import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom"
export const User_login = () => {
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" })
  const handleValues = (e) => {
    let newUser = { ...loginDetails }
    newUser[e.target.name] = e.target.value
    setloginDetails(newUser)
  }
  const getUserCredential = () => {
    var storedDetails = JSON.parse(localStorage.getItem("users"))
    console.log(storedDetails);
    if (storedDetails.email == loginDetails.email && storedDetails.password == loginDetails.password) {
      window.location.href = "users"
    } else {
      alert("invalid email & password")
    }
    clearForm()
    const clearForm = () => {
      setloginDetails(
        { email: "", password: "" }
      )
    }
  }
  return <div>
    <h2>Login Here</h2>
    <form>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" value={loginDetails.email} name="email" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" value={loginDetails.password} name="password" onChange={(e) => { handleValues(e) }} />
        </div>

        <button type="button" onClick={getUserCredential} className="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>;
}
export default User_login