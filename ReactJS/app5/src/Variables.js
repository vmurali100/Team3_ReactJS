import React, { Component } from "react"
export class Variables extends Component{
    constructor(){
        super()
        this.state={
            content:"I am content ",
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
            StudentDetails
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