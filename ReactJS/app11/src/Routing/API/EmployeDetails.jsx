import axios from 'axios';
import React, { useEffect,useState } from 'react';

export const EmployeDetails = () => {
    const [employee, setemployee] = useState([])
    useEffect(() => {
        axios.get("http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then(({ data }) => {
            console.log(data)
            setemployee(data)
        })
    },[])
    return <div>
        {employee.map((emp)=>{
            return <li>{emp.fname}</li>
        })}
    </div>
};
