import { useState } from "react"
export const Example1=()=>{
    let[msg,setmsg]=useState("")
    let[user,setuser]=useState({fname:""})
    let[person,setperson]=useState([])
    function changemsg(){
       setmsg("Hello message")
    }
    function assignPerson(){
       setperson(["Mahesh",])
    }
    function assignUser(){
       setuser({fname:"Lokesh"})
    }
    return<div>
       <h2>{msg}</h2>
       <button onClick={changemsg}>Change</button>
       <hr/>
       <h2>{person}</h2>
       <button onClick={assignPerson}>Clic me</button>
       <hr/>
       <h2>{user.fname}</h2>
       <button onClick={assignUser}>Click</button>
   
    </div>
   
}
export const Example2=()=> {
    let[information,setinformation]=useState("hello from example component...")
    function inform(){
          setinformation("Hello.... am new example...")
    }
    let[student,setstudent]=useState({fname:"",lname:"" ,city:""})
    function assignstudent(){
       setstudent({fname:"Ram",lname:"Charan",city:"Kurnool"})
    }
    let [product,setproduct]=useState([])
    function assignproduct(){
       setproduct(["Pen","Pencil"])
      
    }
        return<div>
      <h2>{information}</h2>
      <button onClick={inform}>Set</button>
      <hr/>
      <ul>
      <li><h2>{student.fname}</h2></li>
      <li> <h2>{student.lname}</h2></li>
      <li><h2>{student.city}</h2></li>
     <li> <button onClick={assignstudent}>click</button></li>
      </ul>
    
      <ul>
      <h2>{product }</h2>
      
      <button onClick={assignproduct}>click</button>
      </ul>
    </div>
}
export const Example3=()=>{
    let[car,setcar]=useState([])
    let[bike,setbike]=useState({bike1:"",bike2:""})
    let[Bus,setbus]=useState("bus component")
    function message(){
       setbus("new bus ")
    }
    function assigncar(){
       setcar(["Maruthi","Bollero"])
    }
    function assignbike(){
       setbike({bike1:"Honda",bike2:"Hero"})
    }
    return<div>
   <h2>{Bus}</h2>
   <button onClick={message}>click</button>

   <h2>{car}</h2>
   <button onClick={assigncar}>click</button>
   
   <h2>{bike.bike1}</h2>
   <h2>{bike.bike2}</h2>
   <button onClick={assignbike}>click</button>
    </div>
 }
export const Example4=()=>{
    let [information,setinformation]=useState("Information")
    let [student1,setstudent1]=useState({name:"",city:"",class:""})
    let [city,setcity]=useState()
    function info() {
       setinformation("Hello from component")
    }
    function stu() {
       setstudent1({name:"Abi",city:"Chennai",class:"10"})
    }
    function cty() {
       setcity(["kadapa","Kurnool"])
    }
       
    return<div>
       <h2>{information}</h2>
       <button onClick={info}>click</button>
       <h2>{student1.name}</h2>
       <h2>{student1.city}</h2>
       <h2>{student1.class}</h2>
       <button onClick={stu}>clk</button>
       <h2>{city}</h2>
       <button onClick={cty}>ck</button>

    </div>
}
export const Example5=()=>{
    let [event,setevent]=useState("Event Information")
    let [student2,setstudent2]=useState({name:"",city:"",mail:""})
    let [city,setcity]=useState()
    function eventinfo() {
       setevent("Hello ....new event information")
    }
    function stu() {
       setstudent2({name:"Hari",city:"Kadapa",mail:""})
    }
    function cty() {
       setcity(["Bangalore","Hyderabad"])
    }
       
    return<div>
       <h2>{event}</h2>
       <button onClick={eventinfo}>click</button>
       <h2>{student2.name}</h2>
       <h2>{student2.city}</h2>
       <h2>{student2.mail}</h2>
       <button onClick={stu}>clk</button>
       <h2>{city}</h2>
       <button onClick={cty}>ck</button>

    </div>
}