import { useState } from "react"

export function First(){
    let [message,setmessage]=useState("Welcome to App10")
    let [student,changedetails]=useState({fNAme:"Abhi"})
    function changeStudentDetails(){
        changedetails({fNAme:"Abirami"})
    }
    let [personName,changeNames]=useState(["Abi"])
    return <div>
        <h3>{message}</h3>
        <button onClick={()=>{setmessage("WELCOME")}}>Click here</button>
        <h2>Student Name : {student.fNAme}</h2>
        <button onClick={changeStudentDetails}>Click</button>
        <h2>Person Name : {personName}</h2>
        <button onClick={()=>{changeNames(["Abirami"])}}>button</button>
    </div>
}
export function Second(){
    let [greeting,setgreeting]=useState("Second Functional Component")
    let [employee,employeedetails]=useState({fName:"A"})
    function changeDetails(){
        employeedetails({fName:"Abhirami"})
    }
    let [fruits,setfruits]=useState(["Apple"])
    return <div>
        <h3>{greeting}</h3>
        <button onClick={()=>{setgreeting("Hello from second comp")}}>Click </button>
        <h2>Employee Name : {employee.fName}</h2>
        <button onClick={changeDetails}>submit</button>
        <h2> Fruits : {fruits}</h2>
        <button onClick={()=>{setfruits(["Orange"])}}>click</button>
    </div>
}
export function Third(){
    let [content,setcontent]=useState("Welcome to 3rd Comp")
    let [user,changeuser]=useState({Age:25})
    
    let [carnames,changecarname]=useState(["Nexon"])
    return <div>
        <h3>{content}</h3>
        <button onClick={()=>{setcontent("this is from 3rd Functional component")}}>Click here</button>
        <h2>User Age : {user.Age}</h2>
        <button onClick={()=>{ changeuser({Age:24})}}>Click</button>
        <h2>Car Name : {carnames}</h2>
        <button onClick={()=>{changecarname(["Skoda"])}}>button</button>
    </div>
}
export function Fourth(){
    let [wishes,setwishes]=useState("Welcome to Fourth Functional comp")
    let [workers,Workerdetails]=useState({Id:"001A"})
   
    let [accessory,changeAccessory]=useState(["Kurtas","Rings"])
    return <div>
        <h2>{wishes}</h2>
        <button onClick={()=>{setwishes("This is a 4th comp")}}>Click here</button>
        <h2>Workers: {workers.Id}</h2>
        <button onClick={()=>{ Workerdetails({Id:"001"})}}>Click</button>
        <h2>Person Name : {accessory}</h2>
        <button onClick={()=>{changeAccessory(["Jhumkas"])}}>button</button>
    </div>
}
export function Fivth(){
    let [string,setstring]=useState("Welcome to 5th comp")
    let [cardetail,changecardetails]=useState({names:"WagonR"})
    
    let [colors,changecolors]=useState(["Violet"])
    function changingcolor(){
        changecolors(["red","pink"])
    }
    return <div>
        <h2>{string}</h2>
        <button onClick={()=>{setstring("I'm 5th comp")}}>Click here</button>
        <h2>Cars : {cardetail.names}</h2>
        <button onClick={()=>{
            changecardetails({names:"Verna",model:"10A"})
        }}>Click</button>
        <h2>colors : {colors}</h2>
        <button onClick={changingcolor}>button</button>
    </div>
}