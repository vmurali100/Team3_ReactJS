import React from 'react'

export default function Lokesh(properties) {
    console.log(properties.personInfo)
    return (
        <div>
            <h2>Hello From Lokesh Component`</h2>
            <p>Value In Child Compoent</p>
            <ul>
                <li>Person First Name : {properties.personInfo.fname}</li>
                <li>Person Last Name : {properties.personInfo.lname}</li>
                <li>Person Email : {properties.personInfo.email}</li>
            </ul>
        </div>
    )
}
