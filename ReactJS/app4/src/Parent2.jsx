import React,{useState} from 'react'
import Child2 from './Child2'

export default function Parent2() {
    const [state, setstate] = useState([])

    const getMobiles =(mobile)=>{
        setstate(mobile)
    }
    return (
        <div>
            <ul>
                {state.map((mob,i)=>{
                    return <li key={i}>{mob}</li>
                })}

            </ul>
            <Child2 recivedMobiles={getMobiles}/>
        </div>
    )
}
