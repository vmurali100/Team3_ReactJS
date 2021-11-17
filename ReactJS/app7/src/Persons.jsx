import React from 'react'

export default function Persons(props) {
    console.log(props.allUsers.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allUsers.map((user,i)=>{
                        return <tr key={i}>
                            <td>{user.fname}</td>
                            <td>{user.lname}</td>
                            <td>{user.city}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
