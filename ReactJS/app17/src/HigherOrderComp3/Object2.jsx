import React from 'react'
import { ParentComp } from './ParentComp'

 const Object2 = (props) => {
    return (
        <div>
            <table border="1">
                <thead>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company Name</th>
                    
                </thead>
                <tbody>
                {props.persons.map((person)=>{
                    return <tr>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                        <td>{person.website}</td>
                        <td> {person.company.name}</td>
                        
                    </tr>
                })}
                </tbody>
            </table>
            
        </div>
    )
}
export default React.memo(ParentComp(Object2))