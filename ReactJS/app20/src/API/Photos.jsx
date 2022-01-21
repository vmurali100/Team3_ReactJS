import axios from 'axios';
import React, { useState } from 'react';

export const Photos = () => {
    const [photos,showPhotos]=useState([])

    
    const getAllPhotos=()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos").then((res)=>{
        console.log(res.data);
        showPhotos(res.data)
    },[])
    }
  return <div>
      <h2>Photos Component</h2>
      <button onClick={getAllPhotos}> Click</button>
      {photos.map((photo)=>{
          return <ul>
              <li>ALbum Id : {photo.albumId}</li>
              <li>Id : {photo.id}</li>
              <li>Title : {photo.title}</li>
              <li><img src={photo.url} alt="" style={{height : "100px", width:"100px"}} /></li> <br />
              <li><img src={photo.thumbnailUrl} style={{height : "100px", width:"100px"}} alt="" /></li>

          </ul>
      })}
  </div>;
};
