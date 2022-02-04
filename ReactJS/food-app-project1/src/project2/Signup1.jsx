import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup1 = () => {
  const [user, setuser] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: ""
  })
  let navigate = useNavigate()
  const handleChange = (e) => {
    let newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)
  }
  const handlesubmit = () => {
    axios.post("http://localhost:3000/users", user).then((res) => {
      alert("user registration successfull")
      navigate("/login")
    })
    console.log(user)
  }
  return (
    <div>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">first name</label>
                <input type="text" className="form-control" name="fname" value={user.fname} onChange={(e) => {
                  handleChange(e)
                }} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">last name</label>
                <input type="text" className="form-control" name="lname" value={user.lname} onChange={(e) => {
                  handleChange(e)
                }} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">username</label>
                <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => {
                  handleChange(e)
                }} />
              </div>


              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={user.email} onChange={(e) => {
                  handleChange(e)
                }} />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => {
                  handleChange(e)
                }} />
              </div>



              <button type="button" className="btn btn-primary" onClick={handlesubmit}>sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};
