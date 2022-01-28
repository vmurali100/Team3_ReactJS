import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";


export const StudentDetails = () => {
  const [student, setStudent] = useState({});
  let params = useParams();
  useEffect(() => {
    let allStudents = JSON.parse(localStorage.getItem("students"))
    var selectedStudent = allStudents.find((std) => std.fname == params.name)
    setStudent(selectedStudent)

  }, [])
  return <div>
    <h2>Welcome to Students Details</h2>
    <ul>
      <li>Student fname:{student.fname}</li>
      <li>Student Email:{student.email}</li>
      <li>Student Password:{student.password}</li>
      <li>Student address:{student.address}</li>
    </ul>
  </div>;
};