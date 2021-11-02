import ChanduClass, { HareeshClass } from "../../app1/src/ChanduClass";
import AbcClass from "./AbcClass";
import Chandu, { Babu, Syam } from "./Chandu";
import { Harish, Lokesh } from "./Harish";
import { Product1, Product2 } from "./Product";
import { Abi, Chandu1, Hareesh, Naveen } from "./Students";
import XyzClass from "./XyzClass";



function App() {
  return (
    <div className="App">
      <h2>Hello From App1</h2>
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
      

  
    </div>
  );
}

export default App;
