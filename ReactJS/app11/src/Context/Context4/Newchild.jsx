import React from 'react'
import { DataConsumer } from './home'

export const Newchild = () => {
    return (
        <div>
            <DataConsumer>
                {(val)=>{
           return <h2>Hello recieved Data:{val}</h2>
                }}
            </DataConsumer>
        </div>
    )
}
