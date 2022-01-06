import React,{useState} from 'react'

export default function Child1(props) {
    const [users, setusers] = useState(["lokesh","chandu","hareesh","abi"])
    return (
        <div>
            <button onClick={()=>{props.recieveData(users)}}>click</button>
            <hr />
        </div>
    )
}
