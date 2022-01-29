import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
export const Register = () => {
    const [registerUser, setregisterUser] = useState({
        fName:"",
        lName:"",
        username:"",
        email:"",
        password:""
    });
    let navigate = useNavigate();
    const handleValues = (e) => {
        let newRegisteredDetails = { ...registerUser }
        newRegisteredDetails[e.target.name] = e.target.value
        // console.log(setloginDetails);
        setregisterUser(newRegisteredDetails)
    }
    const getRegisteredUserDetails=()=>{

        console.log(registerUser);
        let users="http://localhost:3000/users"
        let admin ="http://localhost:3000/admin"
        if(registerUser == users){
            axios.post(users,registerUser).then((res)=>{
                console.log(res.data);
                alert("Registered Successfully")
                navigate("/login");
            })}else{
                 axios.post(admin,registerUser).then((res)=>{
                    console.log(res.data);
                    alert("Admin Registered Successfully")
                navigate("/admin");
            })}
    }
    return <div>
        <form>
            <div className="container">
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                    <input type="email" className="form-control" value={registerUser.fName} name="fName" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                    <input type="email" className="form-control" value={registerUser.lName} name="lName" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="email" className="form-control" value={registerUser.username} name="username" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" value={registerUser.email} name="email" onChange={(e) => { handleValues(e) }} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={registerUser.password} name="password" onChange={(e) => { handleValues(e) }} />
                </div>

                <button type="button" onClick={getRegisteredUserDetails} className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>;
};
