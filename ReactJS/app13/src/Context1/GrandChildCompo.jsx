import React from 'react'
import { UserConsumer } from './UserContext'

export const GrandChildCompo = ({ message }) => {
    return (
        <div>
            {/* <h3>This message recieved from Child component:{message}</h3> */}
            <UserConsumer>
                {(val) => {
                    console.log(val)
                    return <h3>message from container Component (context) : {val.title}</h3>
                }}
            </UserConsumer>
        </div>
    )
}
