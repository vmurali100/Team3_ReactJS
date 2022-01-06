import React,{useState} from 'react'
export default function SampleChild(props) {
    const [state, setstate] = useState(["Murali","Krishna","Ram","Ravi"])

    return (
        <div>
                <button onClick={()=>{props.receiveData(state)}}>Send Data</button>
        </div>
    )
}
