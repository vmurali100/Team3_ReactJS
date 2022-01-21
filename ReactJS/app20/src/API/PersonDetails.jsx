import React,{useState} from 'react';
import axios from 'axios';
;

export const PersonDetails = () => {
    const [persons, showPersons] = useState([]);
    const getPersons=()=>{
        axios.get("https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then((res)=>{
            console.log(res.data);
            showPersons(res.data)
        },[])
    }
  return <div>
        <h2>Person Details Component</h2>
      <button onClick={getPersons}>Click</button>
      {persons.map((person)=>{
          return <ul>
              <li>First Name : {person.fname}</li>
              <li>Last Name : {person.lname}</li>
              <li>Tel : {person.tel}</li>
              <li>Address : {person.address}</li>
              <li>City : {person.city}</li>
              <li>State  : {person.state}</li>
              <li>Zip  : {person.zip}</li>
          </ul>
      })}
  </div>;
};
