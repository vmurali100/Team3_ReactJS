import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";


export const Studentdetails = () => {
  const [student, setStudent] = useState({});
    let params = useParams();
useEffect(()=>{
  let allStudents=JSON.parse(localStorage.getItem("students"))
  var selectedStudent=allStudents.find((std)=>std.name==params.name)
   setStudent(selectedStudent)
  
},[])
  return <div>
      <h2>Welcome to Students Details</h2>
       <ul>
     <li>Student Id:{student.id}</li>
     <li>Student Name:{student.name}</li>
     <li>Student Email:{student.email}</li>
     <li>Student City:{student.city}</li>
       </ul>
  </div>;
};
