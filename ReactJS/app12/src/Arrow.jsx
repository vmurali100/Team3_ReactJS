import React,{useState} from 'react'
// import React from 'react'

export const Arrow = (props) => {
    const [message, setmessage] = useState("Welcome")
    return (
        <div>
            <button onClick={()=>{props.display(message)}}>click</button>
        </div>
    )
}
