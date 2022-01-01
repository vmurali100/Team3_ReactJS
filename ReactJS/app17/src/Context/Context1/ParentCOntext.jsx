import React from 'react'
import { ChildContext } from './ChildContext'

export const ParentCOntext = ({message}) => {
    return (
        <div>
            {/* <h2>message in Parent:{message}</h2> */}
            <ChildContext message={message}/>
        </div>
    )
}
