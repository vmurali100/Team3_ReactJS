import React, { useState } from 'react';

export const Students = () => {
    const [students,setStudents]=useState(["lokesh","Chandu","hareesh","abi"])
  return <div>
      {students.map((stu,i)=>{
          return <p key={i} style={{cursor:"pointer"}}>{stu}</p>
      })}
  </div>;
};
