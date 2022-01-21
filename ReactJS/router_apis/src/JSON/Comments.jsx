import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Comments = () => {
    const [comment, setcomment] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            console.log(res.data);
            setcomment(res.data)
        })
    },[])
  return <div>
      <h2>Hello from comments component</h2>
      {comment.map((cmt,i)=>{
          return <li key={i}><b>Id:</b>{cmt.id} <br /><span><b>Name:</b>{cmt.name}</span><br />
          <span><b>Email:</b>{cmt.email}</span><br /><span><b>body:</b>{cmt.body}</span></li>
      })}
  </div>;
};
