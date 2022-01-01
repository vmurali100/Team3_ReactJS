import { ContextContainer } from "./Context/Context1/ContextContainer";
import ContextCon2 from "./Context/Context2/ContextCon2";
import { ContextContainer3 } from "./Context/Context3/ContextContainer3";
import ContainerContext4 from "./Context/Context4/ContainerContext4";
import { ContainerContext5 } from "./Context/Context5/ContainerContext5";
import Count from "./HigherOrderComp/Count";
import Message from "./HigherOrderComp/Message";
import Hover from "./HigherOrderComp2/Hover";
import Image from "./HigherOrderComp2/Image";
import Object1 from "./HigherOrderComp3/Object1";
import Object2 from "./HigherOrderComp3/Object2";
import Array from "./HigherOrderComp4/Array";
import Array2  from "./HigherOrderComp4/Array2";
import ClickCounter from "./HigherOrderComp5/ClickCounter";
import HoverCounter from "./HigherOrderComp5/HoverCounter";
import Focus from "./Refcomp/RefComp1/Focus";
import ParentContain from "./Refcomp/RefComp2/ParentContain";

import {ParentCon} from "./RenderProps/RenderProp1/ParentCon";
import { Container } from "./RenderProps/RenderProps2/Container";
import { ObjContainer } from "./RenderProps/RenderProps3/ObjContainer";
import ArrayCon from "./RenderProps/RenderProps4/ArrayCon";
import ClickCon from "./RenderProps/RenderProps5/ClickCon";


function App() {
  return (
    <div className="App">
     {/* <Count/>
     <Message/> */}
      {/* <Image/>
      <Hover/> */}
     {/* <Object1/>
     <Object2/> */}
     {/* <Array/>
     <Array2/> */}
     {/* <ClickCounter/>
     <HoverCounter/> */}
     {/* <ParentCon/> */}
     {/* <Container/> */}
     {/* <ObjContainer/> */}
     {/* <ArrayCon/> */}
     {/* <ClickCon/> */}
     {/* <Focus/> */}
     {/* <ParentContain/> */}
     {/* <ContextContainer/> */}
     {/* <ContextCon2/> */}
     {/* <ContextContainer3/> */}
     {/* <ContainerContext4/> */}
     <ContainerContext5/>
      </div>
  );
}

export default App;
