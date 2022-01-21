import axios from "axios";
import { useEffect ,useState} from "react";

export const Albums = () => {
    const [album, setalbum] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
            console.log(res.data);
            setalbum(res.data)
        })
    },[])
  return <div>
      <h2>Hello from Albums Component</h2>
    {album.map((alb,i)=>{
        return <li key={i}><b>userId:</b>{alb.userId} <br /><span><b>Id:</b>{alb.id}</span>
        <br /><span><b>Title</b>{alb.title}</span> </li>
    })}
  </div>;
};
