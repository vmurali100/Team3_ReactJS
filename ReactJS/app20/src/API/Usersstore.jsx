import React,{useState} from 'react';
import axios from 'axios';
export const Usersstore = () => {
    const [users, setUsers] = useState([]);
    const getPost=()=>{
        axios.get("https://fakestoreapi.com/users").then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        },[])
    }
  return <div>
<h2>Users Component</h2>
      <button onClick={getPost}>Click</button>
      {users.map((user)=>{
          return <ul>
              <li>Address : {user.address.city}</li>
              <li>Id : {user.id}</li>
              <li>Username : {user.username}</li>
              <li>Password : {user.password}</li>
              <li>Name : {user.name.firstname}</li>
              <li>Phone : {user.phone}</li>
          </ul>
      })}
  </div>;
    
};
