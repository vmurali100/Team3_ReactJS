import React from 'react'
import { GrandChildCompo } from './GrandChildCompo'

export const ChildCompo = ({message}) => {
    return (
        <div>
            <h3>this message recieved from parent component:{message}</h3>
                <GrandChildCompo message={message}/>
        </div>
    )
}
