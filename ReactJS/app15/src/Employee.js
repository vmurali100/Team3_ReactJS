import React from 'react'

export default function Employee (props) {
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                        <th>password</th>
                    </tr>
                </thead>
                <tbody>
                   {props.employeesInfo.map((emp)=>{
                       return <tr>
                           <td>{emp.id}</td>
                           <td>{emp.email}</td>
                           <td>{emp.username}</td>
                           <td>{emp.password}</td>
                       </tr>
                   })}
                </tbody>
            </table>
        </div>
    )
}