import { useState } from "react";
import { Example1, Example2, Example3, Example4, Example5 } from "./Example1";
import Sample1 from "./Sample1";
import { Abi, Chandu, Employee, User } from "./User";



function App() {
  
  let [usermessage,changeusermessage]=useState("Welcome to User message....")
  return (
    <div className="App">
     <h2>{usermessage}</h2>
     <button onClick={()=>{changeusermessage("This is changing user message component....")}}>change message</button>
    <User/>
    <Employee/>
    <Chandu/>
    <Abi/>
    <Example1/>
    <Example2/>
    <Example3/>
    <Example4/>
    <Example5/>
    <Sample1/>

    </div>
  );
}

export default App;
