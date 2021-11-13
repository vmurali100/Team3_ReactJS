import { useState } from "react";
import ChanduClass, { HareeshClass } from "../../app1/src/ChanduClass";
import AbcClass from "./AbcClass";
import Bindhu from "./Bindhu";
import Chandu, { Babu, Syam } from "./Chandu";
import { Harish, Lokesh } from "./Harish";
import { Product1, Product2 } from "./Product";
import Sharath from "./Sharath";

import { Abi, Chandu1, Hareesh, Naveen } from "./Students";
import XyzClass from "./XyzClass";



function App() {
  let [component,setcomponent]=useState("false")
  return (
    <div className="App">
      {component && <Bindhu/>}
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

  
    </div>
  );
}

export default App;
