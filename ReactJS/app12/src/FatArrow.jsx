import React, { useState } from 'react'
import FatArrow1 from './FatArrow1'

const FatArrow = () => {
    const [greetings, setgreetings] = useState()
    function display(employee) {
        setgreetings(employee)
    }
    return (
        <div>
            {greetings}
            <FatArrow1 details={display} />
        </div>
    )
}

export default FatArrow
