import axios from 'axios';
import React, { useEffect,useState } from 'react';

export const Photos = () => {
    const [photos, setphotos] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(({ data }) => {
            console.log(data)
            setphotos(data)
        })
    }, [])
    return (
        <div>
            {photos.map((pts) => {
                return (
                    <div>
                        <li>{pts.title}</li>
                        <li><img src={pts.url} alt="" width="50px" height="50px" /></li>
                    </div>
                )
            })}

          </div>

    )

};
