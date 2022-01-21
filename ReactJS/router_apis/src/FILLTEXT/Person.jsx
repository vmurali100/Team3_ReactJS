import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

export const Person = () => {
    const [person,setperson]= useState([])
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then(({data})=>{
            console.log(data);
            setperson(data)
        })
    },[])
  return <div>
      <h2>Hello from person component</h2>
      {person.map((pers)=>{
            return <li><b>FirstName:</b>{pers.fname} <br />
            <span><b>Last Name:</b>{pers.lname}</span> <hr /> </li>
      })}
  </div>;
};
