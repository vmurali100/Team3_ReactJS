import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom"
export const User_login = () => {
  const [user,setUser]=useState({email:"",password:""})
const handleChange=(e)=>{
  let newUser={...user}
  newUser[e.target.name]=e.target.value
  setUser(newUser)
}
const submitUser=()=>{
  let newuser={...user}
  setUser(newuser)
  clearForm()
}
const clearForm=()=>{
  setUser(
    {email:"",password:""}
  )
}
  return <div>
      <h2>Login Here</h2>
      <form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" name='email' value={user.email}
    onChange={(e)=>{handleChange(e)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" name='password' value={user.password}
    onChange={(e)=>{handleChange(e)}}/>
  </div>
    <button type="button" class="btn btn-primary" onClick={submitUser} >Submit</button>
</form>
  </div>;
};
export default User_login