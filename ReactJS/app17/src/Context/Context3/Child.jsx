import React from 'react'
import { ObjectConsumer } from './Objects'

export const Child = ({person}) => {
    return (
        <div>
            {/* <h2>{person.password}</h2> */}
           <ObjectConsumer>
                {(value)=>{
                    console.log(value)
                    return <h3>
                        Id : {value.id}<br/>
                        Username : {value.username}<br/>
                        Name : {value.name.firstname}<br/>
                        
                    </h3>
                }}
           </ObjectConsumer>
        </div>
    )
}
