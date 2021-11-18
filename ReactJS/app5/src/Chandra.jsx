import React,{useState} from 'react'
import Babu from './Babu'

export default function Chandra(props) {
    const [emp, setemp] = useState([])
    const getEmp=(myEmp)=>{
      setemp(myEmp)
    }
    // const [student, setstudent] = useState([{fname:"",lname:""}])
    // const getStudents=(myStu)=>{
    // setstudent(myStu)
    // }
    // const [message, setmessage] = useState("")
//  const [user, setuser] = useState({fname:"",lname:""})
//  const getUser=(newUser)=>{
//     setuser(newUser)
//  }
    // const getMsg=(newMsg)=>{
    //     setmessage(newMsg)
    // }
    return (
        <div>
            <ul>
                {emp.map((employ)=>{
                return <li>{employ}</li>
                })}
            </ul>
            <Babu recieveEmp={getEmp}/>
           {/* <ul>
               {student.map((stu)=>{
              return <li>{stu.fname} -- {stu.lname}</li>
               })}
               <Babu recieveStu={getStudents}/>
           </ul> */}
            {/* <ul>
                <li>{user.fname} </li>
                <li>{user.lname}</li>
            </ul>
            <Babu recieveUser={getUser}/> */}
            {/* <h2>{message}</h2>
            <Babu recieveMsg={getMsg}/> */}

        </div>
    )
}
