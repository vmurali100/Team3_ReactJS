import React from 'react';
import { useState } from 'react';

export const Students = () => {
    const [students,setStudents]=useState(["Abi","Chandu","lokesh","Harish"])
  return <div>
      <h2>Hello from Team3 Students</h2>
      {students.map((stu)=>{
          return <li key={stu} style={{cursor:"pointer"}}>{stu}</li>
      })}
  </div>;
};
