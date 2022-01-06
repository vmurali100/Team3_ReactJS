import { Component } from "react"
export default class Sankar extends Component{
    constructor(){
        super()

        this.state={
            message:"welcome to sankar component",
            person:{
                id:"002",
                fname:"Sankar",
                lname:"s",
                email:"Sankar@gmail.com"
            },
            array:["Sankar","Sankar","naveen"]
        }
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={()=>{this.setState({message:"iam changing sankar.....class component"})}}>click</button>
                
            </div>
        )
    }
}