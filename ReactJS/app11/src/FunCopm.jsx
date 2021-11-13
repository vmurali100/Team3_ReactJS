import React, { useState } from "react";
export function Abhim(){
    let [persons,setpersons]=useState([
        {
            "id": 2691,
            "email": "DBettencourt@turpis.io",
            "username": "RReese",
            "password": "aY7GR"
        },
        {
            "id": 2692,
            "email": "KDavila@pulvinar.gov",
            "username": "TKvasnak",
            "password": "t3dAJ"
        },
        {
            "id": 2693,
            "email": "HMcmenamin@ipsum.com",
            "username": "TGreaves",
            "password": "tvxto"
        },
        {
            "id": 2694,
            "email": "MPassanisi@convallis.gov",
            "username": "BGrubbs",
            "password": "jQfsH"
        },
        {
            "id": 2695,
            "email": "TChavez@risus.org",
            "username": "EHellems",
            "password": "LdXaF"
        }
    ])
    return <div>
        
        {persons.map((values,i)=>{
            return <li key={i} >User ID: {values.id}     Name : {values.username}</li>
        })}

    </div>
}