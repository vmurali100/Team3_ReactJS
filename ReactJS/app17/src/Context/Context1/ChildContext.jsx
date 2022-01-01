import React from 'react'
import { MessageConsumer } from './Messages'

export const ChildContext = ({ message }) => {
    return (

        <div>
            {/* {message} */}
            <MessageConsumer>{()=>{
                return <p>Hello from Child : {message}</p>
            }}</MessageConsumer>
        </div>
    )
}
