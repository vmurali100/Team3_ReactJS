import { Component } from "react";

export default class Naveen extends Component{
    constructor(){
        super()

        this.state={
            message:"welcome to class component",
            person:{
                id:"002",
                fname:"Naveen",
                lname:"n",
                email:"Naveen@gmail.com"
            },
            array:["naveen","dilip","hareesh","Somu"]
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>{this.setState({message:"iam changing class component"})}}>click</button>
                
            </div>
        )
    }
}