import React,{useState} from 'react'

export default function Child(props) {
    const [students, setstudents] = useState([{fname:"Charan",lname:"kumar"},{fname:"Hari",lname:"suresh"}])
    return (
        <div>
           <button onClick={()=>{props.recieveData(students)}}>click me</button> 
        </div>
    )
}
