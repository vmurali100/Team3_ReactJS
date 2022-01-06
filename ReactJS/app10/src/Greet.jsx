import React from 'react'

export default function Greet(props) {
    console.log(props)
    return (
        <div>
           <h1>hello {props.name}<br/>{props.email}</h1> 
        </div>
    )
}

