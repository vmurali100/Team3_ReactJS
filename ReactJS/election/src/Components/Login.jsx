import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [loginDetails, setloginDetails] = useState({
        email: "",
        password: ""
    }); 
    let navigate = useNavigate();
    const handleValues = (e) => {
        let newLoginDetails = { ...loginDetails }
        newLoginDetails[e.target.name] = e.target.value
        // console.log(setloginDetails);
        setloginDetails(newLoginDetails)
    }

    const getUserCredential =async () => {
        // console.log(loginDetails);
       

        let users=await getUsers()
        console.log(users);
        if(users.length == 0 ){
            alert("You have note registered...Please Register To login")
            navigate("/register");
        }else{
            let loggedInUser=users.find((us)=> us.email == loginDetails.email && us.password == loginDetails.password)
            let loggedAdminInUser=users.find((adminus)=> adminus.email == loginDetails.email && adminus.password == loginDetails.password)

            if (loggedInUser ){
                localStorage.setItem(("loggedInUser"),JSON.stringify(loggedInUser))
                navigate("/");
            }else if(loggedAdminInUser) {
                localStorage.setItem(("loggedAdminInUser"),JSON.stringify(loggedAdminInUser))
                navigate("/");
            }else{
                alert("You have not registered...Please Register To login")
                navigate("/register");
            }
        }
    }
    const getUsers=()=>{
        return new Promise((resolve,reject)=>{
            axios.get("http://localhost:3000/users").then((res)=>{
                resolve(res.data);
            })
        })
    }
    return <div>
        <div className="loginPage">
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
        </div>
    </div>;
};
