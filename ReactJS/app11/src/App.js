import { useState } from "react";
import { Data } from "./ClassCom";
import { User } from "./FatFunCom";
import { Abhim } from "./FunCopm";


function App() {
  let [showComp,setshowComp]=useState(false)
  let [showUser,setShowUser]=useState(false)
  let [showperson,setshowperson]=useState(false)
  return (
    <div className="App">
      <button onClick={()=>{setshowComp(!showComp)}}>{showComp ? "Hide":"Show"}</button>
      {showComp && <Abhim/>}
      <br/>
      <br/>
      <button onClick={()=>{setShowUser(!showUser)}}>{showUser ? "Hide User":"show User"}</button>
     {showUser &&  <User/>}
     <br/>
      <br/>
     <button onClick={()=>{setshowperson(!showperson)}}>{showperson ? "Hide Person":"show Person"}</button>
     {showperson && <Data/>}
    </div>
  );
}

export default App;
