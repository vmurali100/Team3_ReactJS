import React, { useState } from 'react'
import Arrowfun1 from './Arrowfun1'

export default function Arrowfun() {
    const [users, setusers] = useState([])
    function personData(person) {
        setusers(person)
    }
    return (
        <div>
            <ul>
                {users.map((values, i) => {
                    return <li key={i}>{values}</li>
                })}
            </ul>
            <Arrowfun1 personInfo={personData} />
        </div>
    )
}
