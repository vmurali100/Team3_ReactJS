import React from 'react'
import { Child2 } from './Child2'

export const ParentContext2 = ({cars}) => {
    return (
        <div>
            {/* <h2>cars in Parent :{cars}</h2> */}
            <Child2 cars={cars}/>
        </div>
    )
}
