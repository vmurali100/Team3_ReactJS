import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
  let navigate = useNavigate()
  const [adminuser, setadminuser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    let newuser = { ...adminuser }
    newuser[e.target.name] = e.target.value
    setadminuser(newuser)
  }
  const addDistricts = async () => {
    let newAdmin = await getAllusers()
    if (newAdmin.length == 0) {
      alert("you are admin.... please enter ")
    } else {
      let loggedinAdmin = newAdmin.find((admin => adminuser.email == admin.email && adminuser.password == adminuser.password))
      if (loggedinAdmin) {
        localStorage.setItem(("loggedinAdmin"), JSON.stringify(loggedinAdmin))
        navigate("/newdistricts")
      } else {
        alert("this page only for admins")
        navigate("/login1")
      }
    }
  }
  const getAllusers = () => {
    return new Promise((resolve, reject) => {
      axios.get("http://localhost:3000/admin").then((res) => {
        resolve(res.data)
      })
    })
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-8">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label" >Email address</label>
              <input type="email" class="form-control" name="email" value={adminuser.email} onChange={(e) => {
                handleChange(e)
              }} />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label" >Password</label>
              <input type="password" class="form-control" name="password" value={adminuser.password} onChange={(e) => {
                handleChange(e)
              }} />
            </div>

            <button type="button" class="btn btn-primary" onClick={addDistricts}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};
