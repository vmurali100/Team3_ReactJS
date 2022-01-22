import axios from 'axios';
import React, { useEffect,useState } from 'react';

export const Albums = () => {
    const [albums,setalbums]=useState([])
    const [form, setform] = useState({ });
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then(({data})=>{
            console.log(data)
            setalbums(data)
        })
    },[])
  return <div>
      {albums.map((alm)=>{
          return <li>{alm.title}</li>
      })}
      <form action="">
          
      </form>
  </div>
};
