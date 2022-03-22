import React, { useState } from 'react'

export const Sample2 = () => {
    const [inputValue, setinputValue] = useState("Lokesh")
    const Change=(e)=>{
        const newValue=e.target.value
        setinputValue(newValue)
    }
    return (
        <div>
            <input placeholder="enter something....." onChange={(e)=>{Change(e)}}/>
            {inputValue}
        </div>
    )
}
