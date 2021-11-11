

import { useState } from 'react';
import { Abi } from './Abi';
import { Variables } from './Class';

function App() {

  let [content,changecontent]=useState("I'm from content")
  function changeContentevent() {
    changecontent("Changed ")
  }
  
  return (
    <div className="App">
     {/* <h2>{content}</h2> */}
     {/* <button onClick={()=>{
       changeContentevent()
     }}>Click Here</button> */}
     {/* <Variables/> */}
     <Abi/>
    </div>
  );
}

export default App;
