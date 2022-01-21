import axios from 'axios';
import React, { useEffect,useState } from 'react';

export const Comments = () => {
    const [comments, setcomments] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then(({data})=>{
            console.log(data)
            setcomments(data)
        })
    },[])
  return <div>
      {comments.map((cmt)=>{
          return <li>{cmt.email}</li>
      })}
  </div>
};
