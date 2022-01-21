import axios from "axios";
import { useEffect ,useState} from "react";

export const Users = () => {
    const [user, setuser] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(({data})=>{
    console.log(data);
    setuser(data)
        })
    },[])
  return <div>
      <h2>Hello from Users component</h2>
        {user.map((usr,i)=>{
            return <li key={i}><b>Id:</b>{usr.id} <br />
            <span><b>Name:</b>{usr.name} </span> <br />
            <span><b>Email:</b>{usr.email}</span><br />
            <span><b>Phone:</b>{usr.phone}</span> <br />
            <span><b>website:</b>{usr.website}</span> </li>
        })}
  </div>;
};
