import React from 'react'

export default function Employee(props) {
    console.log(props.Edetails.length)
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
                    {props.Edetails.map((Empdel, i) => {
                        return <tr key={i}>
                            <td>{Empdel.id}</td>
                            <td>{Empdel.email}</td>
                            <td>{Empdel.username}</td>
                            <td>{Empdel.password}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
