import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

export const Person = () => {
    const [persons, setpersons] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:3000/persons").then((res)=>{
          console.log(res.data);
          setpersons(res.data)
          localStorage.setItem("persons",JSON.stringify(res.data))
      })
    }, []);
    
  return <div>
      <h2>Person Component</h2>
      <ul>
          {persons.map((person)=>{
              return <li><Link to={`/person/${person.fNAme}`}>{person.fNAme}</Link></li>
          })}
      </ul>
      {/* <ul>
          
          <li><Link to={`persons/Abirami`}>{persons[0]}</Link></li>
          <li><Link to={`persons/Lokesh`}>{persons[1]}</Link></li>
          <li><Link to={`persons/Harish`}>{persons[2]}</Link></li>
          <li><Link to={`persons/Chandru`}>{persons[3]}</Link></li>
      </ul> */}
  </div>;
};
