import React from 'react'
import { EmployeeConsumer } from './Employee'

export const Child5 = ({Employee}) => {
    return (
        <div>
             {/* <h2>{Employee.map((val)=>{
                    return <li>{val.username}</li>
                })}</h2> */}
                <EmployeeConsumer>
                    {(value)=>{
                        return <ul>
                            <li>Id : {value[2].id}</li>
                            <li>Username : {value[2].username}</li>
                            <li>Email : {value[2].email}</li>
                        </ul>
                    }}
                </EmployeeConsumer>
        </div>
    )
}
