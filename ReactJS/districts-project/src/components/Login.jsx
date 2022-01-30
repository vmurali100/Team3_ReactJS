import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Login = () => {
    let navigate = useNavigate();

    const [users, setuser] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        let newUser = { ...users }
        newUser[e.target.name] = e.target.value
        setuser(newUser)
    }
   
    const handleSubmit = async () => {
        let Allusers =await getAllUser()
        console.log(Allusers)
        if (Allusers.length == 0) {
            alert("Your not regesterd... Please regester and login again")
            navigate("/regester")
        } else {
            let loginUser = Allusers.find((myuser) => users.email == myuser.email && users.password == myuser.password)
            if (loginUser) {
                localStorage.setItem(("loginUser"), JSON.stringify(loginUser))
                navigate("/")
            } else {
                alert("Your not regesterd...")
                navigate("/regester")

            }
        }
    }
    const getAllUser = () => {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3000/user").then((res) => {
                resolve(res.data);
            })
        })

    }
    return <div>
        <form>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email' value={users.email}
                    onChange={(e) => { handleChange(e) }} />
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={users.password}
                    onChange={(e) => { handleChange(e) }} />
            </div>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>;
};
export default Login