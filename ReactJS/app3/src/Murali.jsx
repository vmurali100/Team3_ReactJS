import React, { Component } from 'react'

export function Murali (){
    return <h2>Hello From Murali Component</h2>
}

export const Person = ()=>{
    return <h3>Hello From Person</h3>
}


export class Student extends Component{
    render(){
        return <h4>Hello From Student Component</h4>
    }
}