import React, { useState } from 'react';
export const LoginForm = () => {
    const [userForm, setuserForm] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let newform = { ...userForm }
        newform[e.target.name] = e.target.value
        setuserForm(newform)
    }
    const getUserDetails = () => {
        console.log(userForm)
        var newdata = JSON.parse(localStorage.getItem("users"))
        console.log(newdata)
        if (newdata.email == userForm.email && newdata.password == userForm.password) {
            window.location.href = "allusers"
        }
        // else {
        //     alert("please enter valid email")
        // }

    }

    return (
        <div>
            <form>
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label" >email:</label>
                        <input type="email" className="form-control" name="email" value={userForm.email} onChange={(e) => {
                            handleChange(e)
                        }} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password:</label>
                        <input type="password" className="form-control" name="password" value={userForm.password} onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div>

                    <button type="button" className="btn btn-primary" onClick={getUserDetails}>login</button>
                </div>


            </form>
        </div>
    )
};
