import React, { useState } from 'react'
import Child1 from './Child1'

const Parent1 = () => {
    const [users, setusers] = useState([])
    const getArrayData = (arr) => {
        setusers(arr)
    }
    return (
        <div>
            <ul>
                {users.map((user, i) => {
                    return <li key={i}>{user}</li>
                })}
            </ul>
            <Child1 recieveData={getArrayData} />
        </div>
    )
}
export default Parent1
