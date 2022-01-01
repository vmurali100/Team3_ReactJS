import React, { useState } from 'react'
import { Conexthome } from './Conexthome'
import { ImageProvider } from './Context'
import { Subimage } from './Subimage'

export const Imagecontext = () => {
    

    const [value,setvalue] = useState({
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
    })
    

      
    return (
        <div>
            <h2>Hello Image</h2>
            <ImageProvider value={value} >
                <Conexthome/>
                <Subimage/>
            </ImageProvider>
        </div>
    )
}
