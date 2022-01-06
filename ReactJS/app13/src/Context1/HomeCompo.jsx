import React from 'react'
import { ParentCompo } from './ParentCompo'

export const HomeCompo = ({message}) => {
    return (
        <div>
            <h3>This message received from Container is:{message}</h3>
            <ParentCompo message={message}/>
        </div>
    )
}
