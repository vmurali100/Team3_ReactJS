import axios from 'axios';
import React, { useState } from 'react';

export const Users = () => {
    const [user, setuser] = useState(""
        // {
        //     id: "",
        //     username: "",
        //     email: "",
        //     password: "",
        //     address: {
        //         houseno: "",
        //         street: "",
        //         city: "",
        //         state: "",
        //         zip: ""
        //     }
        // }
    )

    const handleChange = (e) => {
        let newusers = { ...user }
        newusers[e.target.name] = e.target.value
        setuser(newusers)
    }
    // const addresshandleChange = (e) => {
    //     let newaddress = { ...user }
    //     let address = user.address
    //     var key = e.target.name
    //     var value = e.target.value
    //     address[key] = value;
    //     user.address = address
    //     setuser(newaddress)
    // }
    const userId=()=>{
        console.log(user)
        axios.get("http://localhost:3000/users").then((res)=>{
            console.log(res.data)
            let userid=res.data.find(u=>u.address.indexOf(user)>-1)
            console.log(userid)
        })
    }
    return (
        <div >
            <form>
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">id:</label>
                        <input type="text" className="form-control" name="id" value={user.id} onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div>

                    {/* <div className="mb-3">
                        <label htmlFor="username" className="form-label">username:</label>
                        <input type="text" className="form-control" name="username" value={user.username} onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email:</label>
                        <input type="text" className="form-control" name="email" value={user.email} onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">password:</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => {
                            handleChange(e)
                        }} />
                    </div> */}
{/* 
                    <div className="address">
                        <div className="mb-3">
                            <label htmlFor="houseno" className="form-label">houseno:</label>
                            <input type="number" className="form-control" name="houseno" value={user.address.houseno} onChange={(e) => {
                                addresshandleChange(e)
                            }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="street" className="form-label">street:</label>
                            <input type="text" className="form-control" name="street" value={user.address.street} onChange={(e) => {
                                addresshandleChange(e)
                            }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="city" className="form-label">city:</label>
                            <input type="text" className="form-control" name="city" value={user.address.city} onChange={(e) => {
                                addresshandleChange(e)
                            }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="state" className="form-label">state:</label>
                            <input type="text" className="form-control" name="state" value={user.address.state} onChange={(e) => {
                                addresshandleChange(e)
                            }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="zip" className="form-label">zip:</label>
                            <input type="text" className="form-control" name="zip" value={user.address.zip} onChange={(e) => {
                                addresshandleChange(e)
                            }} />
                        </div>
                    </div> */}
                </div>

                <button type="button" className="btn btn-primary" onClick={userId}>sign up</button>
            </form>
        </div>
    )
};
