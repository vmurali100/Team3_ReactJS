import React,{useState}from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { DistrctsDetails } from './DistrctsDetails';
export const Admin = () => {
    let navigate = useNavigate();
    // const [adminLoggedIn, setLoggedIn] = useState(false);
    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: ""
    }); 
    const handleValues = (e) => {
        let newLoginDetails = { ...loginDetails }
        newLoginDetails[e.target.name] = e.target.value
        // console.log(setloginDetails);
        setloginDetails(newLoginDetails)
    }

    const getAdminUserCredential=async()=>{
        console.log(loginDetails);
        let users=await getUsers()
        // console.log(users);
        if(users.length == 0 ){
            alert("No admin ...")
            // navigate("/register");
        }else{
            let loggedAdminInUser=users.find((us)=> us.email == loginDetails.email && us.password == loginDetails.password)
            if (loggedAdminInUser){
                localStorage.setItem(("loggedAdminInUser"),JSON.stringify(loggedAdminInUser))
                // setLoggedIn(loggedAdminInUser)
                navigate("/districts")
                
            }else{
                alert("You are not admin...Please Click Login")
                navigate("/login")
                
            }
        }
    }
    const getUsers=()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/admin").then((res)=>{
                resolve(res.data);
            })
        })
    }
  return <div>
      {/* <DistrctsDetails/> */}
      <div className="AdminloginPage">

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

                    <button type="button" onClick={getAdminUserCredential} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
       {/* { adminLoggedIn &&  <DistrctsDetails/>} */}
  </div>;
};
