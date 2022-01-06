import React from 'react'

export const EmployeeDetails = (props) => {
    console.log(props.allEmpDetails.length)
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>first name</th>
                        <th>last name</th>
                        <th>tel</th>
                        <th>address</th>
                        <th>city</th>
                        <th>state</th>
                        <th>zip</th>
                    </tr>
                </thead>
                <tbody>
                    {props.allEmpDetails.map((emp,i)=>{
                        return <tr key={i}>
                        <td>{emp.fname}</td>
                        <td>{emp.lname}</td>
                        <td>{emp.tel}</td>
                        <td>{emp.address}</td>
                        <td>{emp.city}</td>
                        <td>{emp.state}</td>
                        <td>{emp.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
