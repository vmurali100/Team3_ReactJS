import React,{useState} from 'react'
import Child from './Child'

export  function Parant() {
    const [allstudent, setallstudent] = useState([])

    const getstudent=(newstudent)=>{
        console.log(newstudent)
        setallstudent(newstudent)
    }
    return (
       
        <div>
       <ul>
           {allstudent.map((mystudent,i)=>{

             return  <li key={i}>{mystudent.fname} - {mystudent.lname}</li >  
               
               
           })}
       </ul>
            <Child recieveData={getstudent}/>
        </div>
    )
}


export  function Shyam(props) {
    const [employees,setemployees] = useState([{name:"Shyam",city:"kurnool"},{name:"Sundar",city:"kadapa"}])
    return (
        <div>
            <button onClick={()=>{props.recieveEmp(employees)}}> clickOn</button>
        </div>
    )
}

