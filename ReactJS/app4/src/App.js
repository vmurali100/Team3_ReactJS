<<<<<<< HEAD
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

=======
import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Murali from './Murali';
import AllUsers from './AllUsers';
import ChildComp from './ChildComp';

function App() {
  const [showComp, setShowComp] = useState(false);
  const [showUsers, setshowUsers] = useState(false);
  const [allUsers, setallUsers] = useState([])

  // This method will receive the Users as Argumnents and Add that to allusers 
  const getUsersFromChild = (users) => {
    setallUsers(users)
  }
  return (
    <div className="App">
      <ul>
        {allUsers.map((user, i) => {
          return <li key={i}>{user}</li>
        })}
      </ul>
      {/* <button onClick={()=>{setShowComp(true)}}>Show</button>
      {showComp && <Murali />}
      <hr/>
      <button onClick={()=>{setshowUsers(!showUsers)}}>
        {showUsers ? "Hide Users":"Show Users"}
      </button>
      {showUsers && <AllUsers/>} */}
      <ChildComp receieData={getUsersFromChild} />
>>>>>>> 1be9dcc492b74e1c089712c370d5c4ba9da970c2
    </div>
  );
}

export default App;
