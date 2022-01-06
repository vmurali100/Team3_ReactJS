import React, { useState } from 'react'
import Child3 from './Child3'

export default function Parent3() {
    const [state, setstate] = useState([])

    const grtObjFromChild3 = (objs) => {
        setstate(objs)
    }
    return (
        <div>
            <ul>{state.map((obj,i) => {
                return <li key={i}>{obj.mobile}-{obj.color}</li>
            })}</ul>
            <Child3 recieveObj={grtObjFromChild3} />
        </div>
    )
}
