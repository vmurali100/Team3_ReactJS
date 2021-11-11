import React, { Component } from "react"
export class Sample extends Component{
    constructor(){
        super()
            this.state={
                employeeDetails:{
                    id:"001",
                    empName:"Abi",
                    email:"abc@gamil.com"
                },
                user:["Aaaa","Ssss","Dddd","Ffff"]
            }
        
    }
    render(){
        
        return <div>
            <h2>Employee Details</h2>
            <ul>
                <li>Employee id</li>
            </ul>
            <ul>
                {this.state.user.map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>
        </div>

    }
}