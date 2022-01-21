import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Post = () => {
    const [post, setpost] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(({data}) => {
            console.log(data)
            setpost(data)
        })
    },[])
    return <div>
        {post.map((pt)=>{
            return <li>{pt.title}</li>
        })}
    </div>
};
