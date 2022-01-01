import React from 'react'
import { SecondDataConsumer } from './home'
import { Newchild } from './Newchild'

export const Newparant = () => {
    return (
        <div>
            <SecondDataConsumer>
                {(value)=>{
                    return <h2>Hello from new parant:{value}</h2>
                }}
            </SecondDataConsumer>
            <Newchild/>
        </div>
    )
}
