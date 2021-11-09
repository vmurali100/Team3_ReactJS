import React,{Component} from "react"
export default class Sharath extends Component{
    constructor(){
        super()
        this.state={
            Message:"hello from Sharath component",
            person:{
                fname:"charan",
                lname:"G",
                city:"Tirupati"
            },
            user:["ram","syam",]
        }
    }
        render(){
            return <div>
                <h2>{this.state.Message}</h2>
                <ul>
                    <li>First Name:{this.state.person.fname}</li>
                    <li>Last Nmae:{this.state.person.lname}</li>
                    <li>City:{this.state.person.city}</li>
                </ul>
                <hr/>
                <ul>{this.state.user.map((aa)=>{
                   return<li>{aa}</li>
                })}</ul>

            </div>
        }
    }
