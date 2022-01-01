import React from 'react'
import { Child5 } from './Child5'

export const Parent5context = ({Employee}) => {
    return (
        <div>
            {/* <h2>{Employee.map((val)=>{
                    return <li>{val.username}</li>
                })}</h2> */}
        <Child5 Employee={Employee}/>
        </div>
    )
}
