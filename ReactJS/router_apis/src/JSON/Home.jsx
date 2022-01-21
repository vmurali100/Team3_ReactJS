import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";

export const Home = () => {
  const [apilinks, setapilinks] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/apilinks").then(({data})=>{
  console.log(data);
  setapilinks(data)
    })
  })
  return <div>
      <h2>Hello from Home component</h2>
      
      <nav className="navbar navbar-dark bg-info">
      {apilinks.map((api)=>{
        return <li>
          <Link to={`${api}`}>{api}</Link>
        </li>
      })}
      </nav>
  </div>
};
