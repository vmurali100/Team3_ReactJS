import React, { Component, useState } from "react"
import { render } from "react-dom"
export function Bindhu() {
    return (
        <div>
            <h2>Hello from bindhu component</h2>
        </div>
    )
}
export const Sindhu = () => {
    return (
        <div>
            <h2>Hello from sindhu component</h2>
        </div>
    )
}
export function Kavya() {
    return (
        <div>
            <h2>Hello from Kavya component</h2>
        </div>
    )

}
export function Employess() {
    const [emp, setemp] = useState([{ "fname": "Vinnu", "lname": "Chowdary", "email": "vinnu@gmail.com" },
    { "fname": "Haritha", "lname": "Kumari", "email": "Haritha@gmail.com" },
    { "fname": "Santhosh", "lname": "Kumar", "email": "Sk@gmail.com" }])
    return (<div>
        <ul>
            {emp.map((emps, i) => {
                return <li key={i}>{emps.fname} - {emps.lname} --{emps.email}</li>
            })}
        </ul>
    </div>)


}
export const Studentss = () => {
    const [student, setstudent] = useState([{ "name": "shyam", "city": "kurnool" },
    { "name": "Bheem", "city": "kadapa" },
    { "name": "kiran", "city": "Tirupati" }])
    return (
        <div>
            <ul>
                {student.map((students, i) => {
                 return   <li key={i}>{students.name}  -{students.city}</li>
                })}
            </ul>
        </div>
    )
}
