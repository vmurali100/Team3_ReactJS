import React from 'react'

export default function Lokesh(props) {
    console.log(props.personInfo)
    return (
        <div>
            <h2>Hello From Lokesh Component`</h2>
            <p>Value In Child Compoent</p>
            <ul>
                <li>Person First Name : {props.personInfo.fname}</li>
                <li>Person Last Name : {props.personInfo.lname}</li>
                <li>Person Email : {props.personInfo.email}</li>
            </ul>
        </div>
    )
}
