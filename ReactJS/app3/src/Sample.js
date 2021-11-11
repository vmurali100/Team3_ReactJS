import React, { Component } from "react"
export default class App3 extends Component{
    constructor(){
        super()
        this.state={
            message:"hello",
            personDetails:{
                fName:"Abi",
                lNAme:"M",
                age:24
            },
            personName:["Aa","Bb","Cc","Dd"]
        }
    }
    render(){
        return <div>
            <ul>
                <li>FName = {this.state.personDetails.fName}</li>
                <li>LName={this.state.personDetails.lNAme}</li>
                
            </ul>

            <ul>
                {this.state.personName.map((person)=>{
                    return <li>{person}</li>
                })}
            </ul>
        </div>
    }
}