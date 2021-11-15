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
    </div>
  );
}

export default App;
