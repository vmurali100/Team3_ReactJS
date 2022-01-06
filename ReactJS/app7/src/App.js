import { useState } from 'react';
import './App.css';
import {
  Lokesh, Dilip, Naveen, Somu, Sankar, Hareesh, Chandu, Balaji, Sai, Gajendra, Giri,
  Saranya, Sadik, Dharani, Kumar
} from './Lokesh';
import { Ravi, Blue, Red, Yellow } from './Ravi';


function App() {
  const [showComp, setShowComp] = useState(false)
  const [hidearrow, showarrow] = useState(false)
  const [hideclass, showclass] = useState(false)
  let [showSomu, setShowSomu] = useState(false)
  let [showSankar, setShowSankar] = useState(false)
  let [showHareesh, setShowHareesh] = useState(false)
  const [showChandu, setShowChandu] = useState(false)
  const [showBalaji, setShowBalaji] = useState(false)
  const [showSai, setShowSai] = useState(false)
  let [showGajendra, setShowGajendra] = useState(false)
  let [showGiri, setShowGiri] = useState(false)
  let [showSaranya, setShowSaranya] = useState(false)
  const [showSadik, setShowSadik] = useState(false)
  const [showDharani, setShowDharani] = useState(false)
  const [showKumar, setShowKumar] = useState(false)


  const [showUsers, setShowUsers] = useState(false)
  const [showColor, hideColor] = useState(false)
  const [showred, hidered] = useState(false)
  let [showyellow, hideyellow] = useState(false)
  return (
    <div className="App">

      <button onClick={() => { setShowComp(true) }}>show</button>
      {showComp && <Lokesh />}
      <hr />

      <button onClick={() => { showarrow(true) }}>show </button>
      {hidearrow && <Dilip />}
      <hr />

      <button onClick={() => { showclass(true) }}>show</button>
      {hideclass && <Naveen />}
      <hr />

      <button onClick={() => { setShowSomu(true) }}>click</button>
      {showSomu && <Somu />}
      <hr />

      <button onClick={() => { setShowSankar(true) }}>show</button>
      {showSankar && <Sankar />}
      <hr />

      <button onClick={() => { setShowHareesh(true) }}>click</button>
      {showHareesh && <Hareesh />}
      <hr />

      <button onClick={() => { setShowChandu(true) }}>show</button>
      {showChandu && <Chandu />}
      <hr />

      <button onClick={() => { setShowBalaji(true) }}>click</button>
      {showBalaji && <Balaji />}
      <hr />

      <button onClick={() => { setShowSai(true) }}>show</button>
      {showSai && <Sai />}
      <hr />

      <button onClick={() => { setShowGajendra(true) }}>click</button>
      {showGajendra && <Gajendra />}
      <hr />

      <button onClick={() => { setShowGiri(true) }}>show</button>
      {showGiri && <Giri />}
      <hr />

      <button onClick={() => { setShowSaranya(true) }}>click</button>
      {showSaranya && <Saranya />}
      <hr />

      <button onClick={() => { setShowSadik(true) }}>show</button>
      {showSadik && <Sadik />}
      <hr />

      <button onClick={() => { setShowDharani(true) }}>click</button>
      {showDharani && <Dharani />}
      <hr />

      <button onClick={() => { setShowKumar(true) }}>click</button>
      {showKumar && <Kumar />}
      <hr />

      <button onClick={() => { setShowUsers(true) }}>show users</button>
      {showUsers && <Ravi />}
      <hr />

      <button onClick={() => { hideColor(!showColor) }}>
        {showColor ? "hidecolor" : "showcolor"}
      </button>
      {showColor && <Blue />}

      <hr />

      {/* <Green/> */}
      <button onClick={() => { hidered(!showred) }}>
        {showred ? "hidered" : "show red"}
      </button>
      {showred && <Red />}
      <hr />
      <button onClick={() => { hideyellow(!showyellow) }}>
        {showyellow ? "hideyellow" : "show yellow"}
      </button>
      {showyellow && <Yellow />}
    </div>
  );
}

export default App;
