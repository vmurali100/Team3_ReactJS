import axios from 'axios';
import React ,{useState}from 'react';

export const Comments = () => {
    const [comments, setcomments] = useState([]);
    const getComments=()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
        console.log(res.data);
        setcomments(res.data)
    })
}
  return <div>
      <h2>Comments Component</h2>
      <button onClick={getComments}>Click</button>
      {comments.map((comment)=>{
          return <ul>
              <li>PostId : {comment.postId}</li>
              <li>ID : {comment.id}</li>
              <li>Name : {comment.name}</li>
              <li>Email : {comment.email}</li>
              <li>Body : {comment.body}</li>
              <br />
          </ul>
      })}
  </div>;
};
