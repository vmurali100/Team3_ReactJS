import React,{useState} from 'react'

export default function Arrowfun1(props) {
    const [person, setperson] = useState(["Abhirami","12/12/1997"])

    return (
        <div>
            <button onClick={()=>{props.personInfo(person)}}>Send</button>
        </div>
    )
}
