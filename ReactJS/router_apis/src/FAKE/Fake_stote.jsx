import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export const Fake_stote = () => {
    const [storelinks, setstorelinks] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/storelinks").then(({data})=>{
          console.log(data);
          setstorelinks(data)
        })
    },[])
  return <div>
      <h2>Welcome to Fake Store Components</h2>
      <nav className="navbar navbar-dark bg-warning">
      {storelinks.map((api)=>{
        return <li>
          <Link to={`${api}`}>{api}</Link>
        </li>
      })}
      </nav>
  </div>;
};
