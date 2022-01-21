import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

export const Fill_text= () => {
    const [textlinks, settextlinks] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/textlinks").then(({data})=>{
          console.log(data);
          settextlinks(data)
        })
    },[])
  return <div>
      <h2>Welcome to Fake Store Components</h2>
      <nav className="navbar navbar-dark bg-danger">
      {textlinks.map((api)=>{
        return <li>
          <Link to={`${api}`}>{api}</Link>
        </li>
      })}
      </nav>
  </div>;
};
