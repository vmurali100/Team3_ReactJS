<<<<<<< HEAD
import React, { useState } from "react";
import ChanduClass, { HareeshClass } from "../../app1/src/ChanduClass";
import AbcClass from "./AbcClass";
import { Bindhu, Employess, Kavya, Sindhu, Studentss } from "./Bindhu";
import Chandu, { Babu, Syam } from "./Chandu";
import { Harish, Lokesh } from "./Harish";
import { Product1, Product2 } from "./Product";
import Sharath from "./Sharath";

import { Abi, Chandu1, Hareesh, Naveen } from "./Students";
import XyzClass from "./XyzClass";



function App() {
  const [event, setevent] = useState(false)
  const [show, setshow] = useState(false)
  const [user, setuser] = useState(false)
  const [emp, setemp] = useState(false)
  const [student, setstudent] = useState(true)
  
  
  return (
    <div className="App">
      <button onClick={() => { setevent("true") }}>Show</button>
      {event && <Bindhu />}
      <hr />
      <button onClick={() => { setshow(!show) }}>
        {show ? "Hide message" : "show message"}
      </button>
      {show && <Sindhu />}
      <hr />
      <button onClick={() => { setuser("true") }}>SHOW</button>
      {user && <Kavya />}
      <hr />
      <button onClick={() => { setemp(!emp) }}>
        {emp ? "Hide emp" : " show emp"}
      </button>
      {emp && <Employess />}
      <hr />
      <button onClick={() => { setstudent(!student) }}>
        {student ? "Hide details" : "Show details"}</button>
      {student && <Studentss />}

      {/* <h2>Hello From App1</h2>
      <Product1/>
      <Product2/>
      <Chandu1/>
      <Hareesh/>
      <Abi/>
      <Harish/>
      <AbcClass/>
      <Lokesh/>
      <Babu/>
      <Syam/>
      <Naveen/>
      <ChanduClass/>
      <XyzClass/>
      <Sharath/> */}


=======
import { Chandu, Harish } from "./Harish";
import User from "./User";

function App() {
  return (
    <div className="App">
      <User />
>>>>>>> 1be9dcc492b74e1c089712c370d5c4ba9da970c2
    </div>
  );
}

export default App;
