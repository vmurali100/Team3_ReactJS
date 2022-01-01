import React from 'react'
import { UserConsumer } from './Parantcontext'

export const Subchildcontext = ({message}) => {
    return (
        <div>
            <UserConsumer>
                {(value)=>{
                    console.log(value)
                return <h3>Hello from bottom child comp:{value}</h3>
                }}
            </UserConsumer>
        </div>
    )
}
