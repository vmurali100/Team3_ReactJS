import React from 'react'

export default function Studentdetails(props) {
    console.log(props.Studata.length)
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
                    {props.Studata.map((Studdata,i)=>{
                       return <tr key={i}>
                           <td>{Studdata.id}</td>
                           <td>{Studdata.email}</td>
                           <td>{Studdata.username}</td>
                           <td>{Studdata.password}</td>
                       </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
