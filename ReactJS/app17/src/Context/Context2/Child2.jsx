import React from 'react'
import { GrandChild } from './GrandChild'

export const Child2 = ({cars}) => {
    return (
        <div>
            {/* <h2>Cars in Child: {cars}</h2> */}
            <GrandChild cars={cars}/>
        </div>
    )
}
