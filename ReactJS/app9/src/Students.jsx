import React from 'react'
export default function Students(props) {
    console.log(props.allStudents.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allStudents.map((Student,i)=>{
                        return <tr key={i}>
                            <td>{Student.fname}</td>
                            <td>{Student.lname}</td>
                            <td>{Student.tel}</td>
                            <td>{Student.address}</td>
                            <td>{Student.city}</td>
                            <td>{Student.state}</td>
                            <td>{Student.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
