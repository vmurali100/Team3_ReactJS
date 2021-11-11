import { useState } from "react";
import { User } from "./User";



function App() {
  
  let [usermessage,changeusermessage]=useState("Welcome to User message....")
  return (
    <div className="App">
     <h2>{usermessage}</h2>
     <button onClick={()=>{changeusermessage("This is changing user message component....")}}>change message</button>
    <User/>
    </div>
  );
}

export default App;
