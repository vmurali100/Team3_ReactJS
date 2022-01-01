import React, { useState } from 'react'
import { MessageProvider } from './Messages'
import { ParentCOntext } from './ParentCOntext'

export const ContextContainer = () => {
    const [message, setmessage] = useState("Hello from Context Container")
    return (


        <div>
             {/* <h2>Message : {message}</h2> */}
            <MessageProvider value={message}>
             <ParentCOntext message={message}/>
                
            </MessageProvider>

        </div>
    )
}
