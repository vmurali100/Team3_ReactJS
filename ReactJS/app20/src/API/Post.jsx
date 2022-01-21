import React ,{useState}from 'react';
import axios from 'axios';


export const Post = () => {
    const [posts, setposts] = useState([]);
    const getPost=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data);
            setposts(res.data)
        },[])
    }
  return <div>
      <h2>Post Component</h2>
      <button onClick={getPost}>Click</button>
      {posts.map((post)=>{
          return <ul>
              <li>User Id : {post.userId}</li>
              <li>Id : {post.id}</li>
              <li>Title : {post.title}</li>
              <li>Body : {post.body}</li>

          </ul>
      })}
  </div>;
};
