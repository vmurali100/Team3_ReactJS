import React, {useState} from 'react'
import Child1 from './Child1'

export default function Parent1() {
    const [student, setStudents] = useState([])
    const getDataFromChild1 = (data) =>{
        setStudents(data)
    }
    return (
        <div>
            <ul>
                {student.map((stu,i)=>{
                    return <li key={i}>{stu}</li>
                })}
            </ul>
            <Child1 recieveData={getDataFromChild1}/>
        </div>
    )
}
