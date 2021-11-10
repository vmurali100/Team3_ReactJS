import logo from './logo.svg';
import './App.css';
import { Murali, Person, Student } from './Murali';
import User from './User';
import { useState } from 'react';

function App() {
  // React Hooks
  // When Declare a vaiable , 
  //we need to pass the value 
  //and Function to change the calue
  let [userMessage, setUserMessage] = useState("Welcome to App Compoent in React Hooks")
  return (
    <div className="App">
      {/* <h2>Hello From Functional Component - App</h2>
      <h2>{userMessage}</h2>
      <button onClick={()=>{setUserMessage("Hello React Hook ... I am Changing you ...")}}>Change Message</button> */}
      <User/>
    </div>
  );
}

export default App;
