import React, { useState } from 'react'

export default function Abhifun(props) {
    console.log(props.details)
    const [person, setperson] = useState(["Abi","M"])
    return (
        <div>
            {/* {person} */}
            <ul>
                <button onClick={() => {props.details(person)
                }}> Send</button>
                
            </ul>

        </div>
    )
}
