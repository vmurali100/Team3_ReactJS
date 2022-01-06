import React from 'react'

export default function Child(props) {
    console.log(props.recieveData)
    return (
        <div>
            <h1>iam from child component</h1>
            <ul>
                    <li>{props.recieveData.fname}</li>
                    <li>{props.recieveData.lname}</li>
                    <li>{props.recieveData.email}</li>
                </ul>
        </div>
    )
}
