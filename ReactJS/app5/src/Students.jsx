import React from 'react'

export const Students = (props) => {
    console.log(props.allStudents.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allStudents.map((student)=>{
                        return <tr>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                            <td>{student.tel}</td>
                            <td>{student.address}</td>
                            <td>{student.city}</td>
                            <td>{student.state}</td>
                            <td>{student.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
