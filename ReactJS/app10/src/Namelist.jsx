import React from 'react'
import Employee from './Employee'

export default function Namelist() {
    const employeeDetails = [
        {
            id: "1",
            name: "lokesh",
            email: "lokeshvasu63@gmail.com",
            skill: "react",
            proffession: "front-end developer"
        },
        {
            id: "2",
            name: "chandu",
            email: "chandu@gmail.com",
            skill: "react",
            proffession: "front-end developer"
        },
        {
            id: "3",
            name: "hareesh",
            email: "hareesh@gmail.com",
            skill: "react",
            proffession: "front-end developer"
        },
        {
            id: "4",
            name: "abi",
            email: "abi@gmail.com",
            skill: "react",
            proffession: "front-end developer"
        },
    ]
    const emplist = employeeDetails.map((emp) =>
        <Employee key={emp.id} emp1={emp} />)
    return (
        <div>
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
            
            <h2>{emplist}</h2>

        </div>
    )
}
