import axios from 'axios';
import React,{useState} from 'react';

export const Username = () => {
    const [username, setusername] = useState([]);
    const getNames=()=>{
        axios.get("https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true").then((res)=>{
            console.log(res.data);
            setusername(res.data)
        })
    }
  return <div>
      <h2>User Name Component</h2>
      <button onClick={getNames}>Click</button>
      {username.map((names)=>{
          return <ul>
              <li>First Name : {names.fname}</li>
              <li>Last Name : {names.lname}</li>
          </ul>
      })}
  </div>;
};
