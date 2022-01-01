
import React, { useState } from 'react'
import { Childcontext } from './Childcontext'
import { UserProvider } from './Parantcontext'

  export const Contextcomp = () => {
    const [message, setmessage] = useState("Hello am from parent component")
    return (
        <div>
            <UserProvider value={message}>
                <Childcontext/>
         <h2>Hello</h2> 
            </UserProvider>
            
        </div>
    )
}
export default Contextcomp