import React, {useState} from 'react'

export default function Child1(props) {
    const [message, setmessage] = useState(["lokesh","hareesh","chandu"])
    return (
        <div>
            <button onClick={()=>{props.recieveData(message)}}>click</button>
        </div>
    )
}
