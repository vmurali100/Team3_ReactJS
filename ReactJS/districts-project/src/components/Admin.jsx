import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Admin = () => {
    let navigate = useNavigate();
    const [adimnLogin, setadimnLogin] = useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
    let newadmin={...adimnLogin}
    newadmin[e.target.name]=e.target.value
    setadimnLogin(newadmin)
    }
    const handleSubmitAdmin=async()=>{
        let newAdmin=await getAllUser()
    if(newAdmin.length==0){
        alert("No admins ....")
    }else{
        let loggedinAdmin=newAdmin.find(adm=>adm.email==adimnLogin.email && adm.password==adimnLogin.password)
        if(loggedinAdmin){
          localStorage.setItem(("loggedinAdmin"),JSON.stringify(loggedinAdmin))
          navigate("/newdist")
        }else{
            alert("This page only loggedin for Admins... Login here")
            navigate("/login")
        }
    }
  
    }
    const getAllUser=()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/admin").then((res)=>{
                resolve(res.data);
        })
        })
    }
    
  return <div>
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={adimnLogin.email}
                    onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={adimnLogin.password}
                    onChange={(e) => { handleChange(e) }} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmitAdmin}>Submit</button>
        </form>
  </div>;
};
