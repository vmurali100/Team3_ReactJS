import React from 'react'
import { ContainerComp } from './ContainerComp'

 const Message = (props) => {
    // const [greetings, setgreetings] = useState("Welcome from Functional Comp")
    // const [count, setcount] = useState(0
    // )
    // const handlegreeting=()=>{
    //     setgreetings("Changing Greetings in functional Comp")
    // }
    // const handleCount=()=>{
    //     setcount(count+1)
    // }
    return (
        <div>
            <h2  onMouseOver={props.handlegreeting}>Greetings : {props.greetings}</h2>
            
            {/* <h2>Count : {props.count}</h2> */}
            {/* <button >CLick to add</button> */}
        </div>
    )
}
export default React.memo(ContainerComp(Message)) 