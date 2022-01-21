import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';

export const Students = () => {
    const [student,setstudent]= useState([])
    useEffect(()=>{
        axios.get("http://www.filltext.com/?rows=10&id={index}&email={email}&username={username}&password={randomString|5}&pretty=true").then(({data})=>{
           setstudent(data)
        })
    },[])

  return <div>
      <h2>Hello from Students component</h2>
      {student.map((stu)=>{
          return <li><b>Id:</b>{stu.id} <br />
          <span><b>email:</b>{stu.email} </span> <br /> 
          <span><b>userName:</b>{stu.username} </span> <br />
          <span><b>password:</b>{stu.password} </span> <br /></li>
      })}
  </div>;
};
