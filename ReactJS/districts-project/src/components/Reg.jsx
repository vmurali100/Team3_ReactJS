import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";

export const Reg = () => {
  let navigate = useNavigate();

  const [user, setuser] = useState({
    fname:"",
    lname:"",
    username:"",
    email:"",
    password:""
  });
  const handleChange=(e)=>{
let newUser={...user}
newUser[e.target.name]=e.target.value
setuser(newUser)
  }
  const addData=()=>{
    axios.post("http://localhost:3000/user",user).then((res)=>{
      alert("Registration successful")
      localStorage.setItem(("user"),JSON.stringify( user))
  navigate("/login")
    })
  }
  return <div>
    <div className="container">
    <form>
  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">fname</label>
    <input type="text" className="form-control"
    name='fname' value={user.fname} onChange={(e)=>{handleChange(e)}} />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">lname</label>
    <input type="text" className="form-control"
    name='lname' value={user.lname} onChange={(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">username</label>
    <input type="text" className="form-control"
    name='username' value={user.username} onChange={(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">email</label>
    <input type="text" className="form-control"
    name='email' value={user.email} onChange={(e)=>{handleChange(e)}}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"
    name='password' value={user.password} onChange={(e)=>{handleChange(e)}}/>
  </div>
  
  <button type="button" className="btn btn-primary" onClick={addData}>Submit</button>
</form>
    </div>
  </div>;
};
export default Reg 