import React,{useState} from 'react'

export default function Child3(props) {
    const [state, setstate] = useState([{"mobile":"redmi","color":"blue"},{"mobile":"asus","color":"red"}])
    return (
        <div>
            <button onClick={()=>{props.recieveObj(state)}}>click it</button>
            <hr />
        </div>
    )
}
