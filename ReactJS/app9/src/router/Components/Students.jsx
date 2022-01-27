import React from 'react';
import {Link} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const Students = () => {
    const [students,setStudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/studentsdetails").then((res)=>{
            console.log(res.data);
            localStorage.setItem("students",JSON.stringify(res.data))
            setStudents(res.data)                                 
        })
    },[])
      return <div>
      <h2 style={{color:"red"}}>Hello from Front end web developer Students</h2>
      {students.map((stu,i)=>{
          return <li key={i} style={{cursor:"pointer"}}
            > <Link to={`/students/${stu.name}`}> {stu.name}</Link>
            </li>
      })}
  </div>;
};
