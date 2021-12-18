import logo from './logo.svg';
<<<<<<< HEAD
import React, { useState } from 'react';
import './App.css';
import  Abc, { Charan,  Charry ,Mohan } from './Charan';
import { Parant ,Shyam}from './Parant';
import Chandra from './Chandra';
import Parantto from './Parantto';

function App() {

  return (
    <div className="App">
  <Chandra/>
  

  {/* const [emp, setemp] = useState([])
   const newEmployee=(myemp)=>{ */}
  {/* //   setemp(myemp)
  // }
//   const [alluser, setalluser] = useState([])
//   const [allmsg,setallmsg] =useState([])
//   const [emps, setemps] = useState([])
//   const [message, setmessage] = useState("")
//   const getString=(newstring)=>{ */}
{/* //     setmessage(newstring)
//   } */}
{/* //  const getemp=(emp)=>{ */}
{/* //    setemps(emp)
//  }
//   const getMsg=(msgs)=>{ */}
{/* //     setallmsg(msgs)
//   }
//   const getData =(user)=>{ */}
{/* // setalluser(user)
//   } */}
 
      
{/* <h2>{message}</h2>
     <Abc recievestring={getString}/>
      
     <ul>
       {emps.map((empp,i)=>{
         return <li key={i}>{empp}</li>
       })}
     </ul>
      <Mohan recieveEmp={getemp}/>
      <ul>
      {allmsg.map((message,i)=>{
        return <li key={i}>{message}</li>
      })}
      </ul>
      <Charry recieveMsg={getMsg}/>
      <ul>
        {alluser.map((user)=>{
          return<li>{user}</li>
        })}
      </ul>
      <Charan recieveData={getData} /> */}
      
=======
import './App.css';
import users from './users.json'
import { Students } from './Students';

function App() {
  console.log(users)
  return (
    <div className="App">
      <Students allStudents={users}/>
>>>>>>> 1be9dcc492b74e1c089712c370d5c4ba9da970c2
    </div>
  );
}

<<<<<<< HEAD

=======
>>>>>>> 1be9dcc492b74e1c089712c370d5c4ba9da970c2
export default App;
