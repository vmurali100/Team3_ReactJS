import { useState } from "react"

export function User(){
    let[message,setmessage]=useState("")
    let[user,setuser]=useState({fname:""})
    let[person,setperson]=useState([])
    function changemessage(){
       setmessage("Hello message")
    }
    function assignPerson(){
       setperson(["Ram",])
    }
    function assignUser(){
       setuser({fname:"Chandu"})
    }
    return<div>
       <h2>{message}</h2>
       <button onClick={changemessage}>Change</button>
       <hr/>
       <h2>{person}</h2>
       <button onClick={assignPerson}>Clic me</button>
       <hr/>
       <h2>{user.fname}</h2>
       <button onClick={assignUser}>Click</button>
   
    </div>
}
 export function  Employee(){
    let[information,setinformation]=useState("hello from employee component...")
    function inform(){
          setinformation("Hello.... am new employee...")
    }
    let[student,setstudent]=useState({fname:"",lname:""})
    function assignstudent(){
       setstudent({fname:"venu",lname:"Gopal"})
    }
    let [product,setproduct]=useState([])
    function assignproduct(){
       setproduct(["product1","product2"])
      
    }
        return<div>
      <h2>{information}</h2>
      <button onClick={inform}>Set</button>
      <hr/>
      <ul>
      <li><h2>{student.fname}</h2></li>
      <li> <h2>{student.lname}</h2></li>
     <li> <button onClick={assignstudent}>click</button></li>
      </ul>
      <h2>{product }</h2>
      <button onClick={assignproduct}>click</button>
    </div>
 }
 export function Chandu(){
    let[car,setcar]=useState([])
    let[bike,setbike]=useState({bike1:"",bike2:""})
    let[train,settrain]=useState("train component")
    function message(){
       settrain("Hello ")
    }
    function assigncar(){
       setcar(["Honda","Suzuki"])
    }
    function assignbike(){
       setbike({bike1:"Pulsor",bike2:"FZ"})
    }
    return<div>
   <h2>{train}</h2>
   <button onClick={message}>click</button>

   <h2>{car}</h2>
   <button onClick={assigncar}>click</button>
   
   <h2>{bike.bike1}</h2>
   <h2>{bike.bike2}</h2>
   <button onClick={assignbike}>click</button>
    </div>
 }
 export function Abi(){
    let [information,setinformation]=useState("Information")
    let [student1,setstudent1]=useState({name:"",city:""})
    let [city,setcity]=useState()
    function info() {
       setinformation("Hello info")
    }
    function stu() {
       setstudent1({name:"Abi",city:"Chennai"})
    }
    function cty() {
       setcity(["Tirupati","Kurnool"])
    }
       
    return<div>
       <h2>{information}</h2>
       <button onClick={info}>click</button>
       <h2>{student1.name}</h2>
       <h2>{student1.city}</h2>
       <button onClick={stu}>clk</button>
       <h2>{city}</h2>
       <button onClick={cty}>ck</button>

    </div>
 }