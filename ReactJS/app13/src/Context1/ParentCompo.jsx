import React from 'react'
import { ChildCompo } from './ChildCompo'

export const ParentCompo = ({message}) => {
    return (
        <div>
            <h3>This message recieved from Home Component:{message}</h3>
            <ChildCompo message={message}/>
        </div>
    )
}
