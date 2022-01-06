import React from 'react'

export default function Companydetails(props) {
    console.log(props.Comdt.length)
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
                    {props.Comdt.map((cd,i) => {
                        return <tr key={i}>
                            <td>{cd.fname}</td>
                            <td>{cd.lname}</td>
                            <td>{cd.tel}</td>
                            <td>{cd.address}</td>
                            <td>{cd.city}</td>
                            <td>{cd.state}</td>
                            <td>{cd.zip}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
