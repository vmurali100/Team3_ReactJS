import React from 'react'
import { Child4 } from './Child4'

export const ParentContext4 = ({student}) => {
    return (
        <div>
            {/* <h2>{student.map((val)=>{
                    return <li>{val.username}</li>
                })}</h2> */}
                <Child4 student={student}/>
        </div>
    )
}
