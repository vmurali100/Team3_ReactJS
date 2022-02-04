import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login1 = () => {
  let navigate = useNavigate()

  const [user, setuser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    let newuser = { ...user }
    newuser[e.target.name] = e.target.value
    setuser(newuser)
  }
  const handleSubmit = async () => {
    let users = await getAllUsers()
    console.log(users)
    if (users.length == 0) {
      alert("you are not registered ... please register and try again")
      navigate("/signup")
    } else {
      let loggedInuser = users.find((myuser) => user.email == myuser.email && user.password == myuser.password)
      if (loggedInuser) {
        navigate("/")
        localStorage.setItem("loggedInuser", JSON.stringify(loggedInuser))
      } else {
        alert("you are not registered ... please register and try again")
        navigate("/signup")

      }
    }
  }
  const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/users").then((res) => {
        resolve(res.data)
      })
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" name="email" value={user.email} onChange={(e) => {
                handleChange(e)
              }} />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" name="password" value={user.password} onChange={(e) => {
                handleChange(e)
              }} />
            </div>



            <button type="button" class="btn btn-primary" onClick={handleSubmit}>login in</button>
          </form>
        </div>
      </div>
    </div>
  )
};
