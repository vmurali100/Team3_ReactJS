import React from 'react'
import { ObjectsConsumer } from './ArrayofObj'

export const Child4 = ({student}) => {
    return (
        <div>
            {/* <h2>{student.map((val)=>{
                    return <li>{val.username}</li>
                })}</h2> */}
                <ObjectsConsumer>
                    
                 {(value,i)=>{
                    // console.log(value)
                    return <ul>
                    <li key={i}>Id : {value[0].id}</li>
                    <li  key={i}> Username : {value[0].username}</li>
                    </ul>
                  
                       
                    
                }}
                </ObjectsConsumer>
        </div>
    )
}
