import React from 'react'
import { Child } from './Child'

export const Parent3 = ({person}) => {
    return (
        <div>
            {/* <h4>{person.username}</h4> */}
            <Child person={person}/>
        </div>
    )
}
