import axios from "axios";
import { useEffect,useState } from "react";

export const Photos = () => {
    const [photo, setphoto] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then(({data})=>{
           console.log(data);
           setphoto(data)
        })
    })
  return <div>
      <h2>Hello from Photos Component</h2>
         {photo.map((pt,i)=>{
             return <li key={i}><b>Id:</b>{pt.id} <br /> 
             <span><b>Title:</b>{pt.title}</span> <br />
             <img src={pt.url} alt=""  height="100px" width="100px"/> </li>
         })}
  </div>;
};
