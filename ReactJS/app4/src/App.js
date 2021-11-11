import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Murali from './Murali';
import AllUsers from './AllUsers';

function App() {
  const [showComp, setShowComp] = useState(false);
  const [showUsers, setshowUsers] = useState(false)
  return (
    <div className="App">
      <button onClick={()=>{setShowComp(true)}}>Show</button>
      {showComp && <Murali />}
      <hr/>
      <button onClick={()=>{setshowUsers(!showUsers)}}>
        {showUsers ? "Hide Users":"Show Users"}
      </button>
      {showUsers && <AllUsers/>}
    </div>
  );
}

export default App;
