import React, { Component } from "react"
export class Variables extends Component{
    constructor(){
        super()
        this.state={
            content:"I am from content ",
            studentDetails:{
                fName:"Abhi",
                lName:"M",
                age:24,
            },
            arrayelements:["Apple","Orange","papaya"]
        }
    }
    render(){
        return <div>
            <h2>
            {this.state.content}
            <button onClick={()=>{this.setState({content:"changing content"})}}> Click me</button>
        </h2>

        <ul>
            <li>first Name:{this.state.studentDetails.fName}</li>
            <li>last Name:{this.state.studentDetails.lName}</li>
        </ul>

        <ul>
            {this.state.arrayelements.map((elements)=>{
                return <li>{elements}</li>
            })}
        </ul>
        </div>
    }
}