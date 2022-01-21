import axios from 'axios';
import React, { useEffect , useState } from 'react';

export const PersonDetails = () => {
    const [person, setperson] = useState([])
    useEffect(()=>{
        axios.get("http://filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true").then(({data})=>{
            console.log(data)
            setperson(data)
        })
    },[])
  return <div>
        {person.map((pn)=>{
            return <li>{pn.adress}-{pn.city}</li>
        })}
  </div>
};
