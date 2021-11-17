import React from 'react'

export default function Users(props) {
    console.log(props.allUsers.length)

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>User name</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allUsers.map((user)=>{
                        return <tr>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}
