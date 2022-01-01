import React ,{useState}from 'react'
import { ObjectProvider } from './Objects'
import { Parent3 } from './Parent3'

export const ContextContainer3 = () => {
    const [person, setperson] = useState({"address":{"geolocation":{"lat":"-37.3159","long":"81.1496"},"city":"kilcoole","street":"new road","number":7682,"zipcode":"12926-3874"},"id":1,"email":"john@gmail.com","username":"johnd","password":"m38rmF$","name":{"firstname":"john","lastname":"doe"},"phone":"1-570-236-7033","__v":0})
    return (
        <div>
            {/* <h2>{person.id}</h2> */}
            <ObjectProvider value={person}><Parent3 person={person}/></ObjectProvider>
            
        </div>
    )
}
