import React,{useState} from "react";

import { Abhi, Abirami, ClassAbi, Employee, Last } from "./ClassC";
// import { Acomp } from "./Functioncom";


function App() {
  let [message,changemessage]= useState("HELLO")
  function changing() {
    changemessage("Changing Message")
  }
  let [person,changeperson]=useState("")
  return (
    
    <div className="App">
     <h2>Hello from Message</h2>
     <h2>{message}</h2>
     <button onClick={()=>{changing()}}>Click</button>
     <Abirami/>
     <Abhi/>
     <ClassAbi/>
     <Employee/>
     <Last/>
     {/* <Acomp /> */}
    </div>

  );
}

export default App;
