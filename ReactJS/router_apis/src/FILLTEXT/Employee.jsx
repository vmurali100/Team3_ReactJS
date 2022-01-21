import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';

export const Employee = () => {
    const [emp,setemp]= useState([])
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then(({data})=>{
            console.log(data);
           setemp(data)
        })
    },[])
  return <div>
      <h2>Hello from employee component</h2>
      {emp.map((emps)=>{
 return <li><b>First Name:</b>{emps.fname} <br />
 <span><b>Last Name:</b>{emps.fname} </span> <br />
 <span><b>Tel:</b>{emps.tel} </span> <br />
 <span><b>Address:</b>{emps.address} </span> <br />
 <span><b>City:</b>{emps.city} </span> <br />
 <span><b>State:</b>{emps.state} </span> <br />
 <span><b>Zip:</b>{emps.zip} </span> <br /> <hr /> </li>
      })}
  </div>;
};
