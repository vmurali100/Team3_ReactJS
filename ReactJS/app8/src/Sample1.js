import React,{useState} from 'react'
import SampleChild from './SampleChild'

export default function Sample1() {
    const [users, setusers] = useState([])
    const receiveData=(u)=>{
        setusers(u)
    }
    return (
        <div>
            <ul>
                {users.map((user)=>{
                    return <li>{user}</li>
                })}
            </ul>
            <SampleChild receiveData={receiveData}/>
        </div>
    )
}
