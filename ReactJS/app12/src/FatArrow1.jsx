import React, { useState } from 'react'

const FatArrow1 = (props) => {
    const [employee, setemployee] = useState("Welcome to App 12")
    return (
        <div>
            <button onClick={() => { props.details(employee) }}>Click</button>
        </div>
    )
}

export default FatArrow1
