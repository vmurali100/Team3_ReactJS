import axios from "axios";
import { useEffect,useState } from "react";

export const Posts = () => {
    const [photo, setphoto] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
         console.log(res.data);
         setphoto(res.data)

        })
    },[])
  return <div>
      <h2>Hello from Posts Component</h2>
      {photo.map((pt,i)=>{
          return(
              <li key={i}><b>Id:</b>{pt.id}<br/> <span><b>Title:</b> {pt.title}</span><br/><span><b>body:</b>{pt.body}</span></li>
              
          )
      })}
  </div>;
};
