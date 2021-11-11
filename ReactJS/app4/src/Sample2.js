import React, { Component } from "react"
export default class Abhi extends Component {
    constructor(){
        super()
        this.state={
            message:"hello from message",
            empDetails:{
                empId:"001",
                empyName:"Abirami",
                empEMail:"abirami121297@gmail.com"
            },
            employerDetails:["AAAAA","xyz@gmail.com",23878909,"address"]
        }
    }
    render(){
        return <div>
            <h2>Employee1</h2>
            {/* <h2>{this.state.message}</h2> */}

            <ul>
                {this.state.employerDetails.map((details)=>{
                    return <li>{details}</li>
                })}

                
            </ul>

            <ul>
            <li>Employee Email = {this.state.empDetails.empEMail}</li>
                <li>Employee Id ={this.state.empDetails.empId}</li>
                <li>Employee Name = {this.state.empDetails.empyName}</li>
            </ul>
        </div>
    }
}
export class Employee2 extends Component{
    constructor(){
        super()
        this.state={
            empDetails:{
                empId:"002",
                empyName:"Abi",
                empEMail:"abi@gmail.com"
            },
            employerDetails:["BBBB","abc@gmail.com",9876543221,"address"]
        }
    }
    render(){
        return <div>
            <h2>Employee2</h2>
            <ul>
                <li>Employee Id = {this.state.empDetails.empId }</li>
                <li>Employee Name = {this.state.empDetails.empyName}</li>
                <li>Employee Email={this.state.empDetails.empEMail} </li>
            </ul>

            <ul>
                {this.state.employerDetails.map((details)=>{
                    return <li>{details}</li>
                })}
            </ul>
        </div>
    }
}