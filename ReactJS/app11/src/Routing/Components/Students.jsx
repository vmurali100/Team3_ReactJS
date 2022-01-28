import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export const Students = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/person").then((res) => {
            console.log(res.data)
            localStorage.setItem("students", JSON.stringify(res.data))
            setStudents(res.data)
        })
    },[])
    return (
        <div>
            <i>
                {students.map((student,i) => {
                    return <p key={i}   style={{ cursor: "pointer" }}>
                        <Link to={`/students/${student.fname}`}>{student.fname}</Link>
                    </p>
                })}
            </i>
            
        </div>
    )
};
