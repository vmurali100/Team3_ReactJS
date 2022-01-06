import React, { useState } from 'react'
import ChildClass3 from './ChildClass3'

export default function ParentClass3() {
    const [color, setcolor] = useState([])
    const [message, setmessage] = useState("")

    const getColorsfromchild = (users) => {
        setcolor(users)
    }


    const getmsgfromchild3 = (message) => {
        setmessage(message)
    }

    
    return (
        <div>
            <ul>{color.map((clr, i) => {
                return <li key={i}>{clr}</li>
            })}</ul>

            <ul>{message}</ul>

            <ChildClass3 recieveColors={getColorsfromchild} 
            recievemessage={getmsgfromchild3} />

        </div>
    )
}
