import axios from 'axios';
import React, { useState } from 'react';

export const Albums = () => {
    const[albums,setAlbums]=useState([])
    const getALbums=()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>{
            console.log(res.data);
            setAlbums(res.data)
        })
    }
  return <div>
      <h2>Albums Component </h2>
      <button onClick={getALbums}>Click</button>
      {albums.map((album)=>{
          return <ul>
              <li> ID : {album.id}</li>
              <li>User Id : {album.userId}</li>
              <li>Title : {album.title}</li>
          </ul>
      })}
  </div>;
};
