import { Component } from "react";
import Lokesh1 from "./Lokesh1";

export default class Lokesh extends Component{
    constructor(){
        super()
        this.state={
            message:"iam learning react js",

            employee:{
                id:"002",
                fname:"Hareesh",
                email:"hareesh@gmail.com",
                proffession:"front-end developer"
            },
            teammates:["hareesh","Lokesh","Chandu","abi"]
        }
    }
    render(){
        return(
            <div>
                <Lokesh1
                message={this.state.message}
                objs={this.state.employee}
                array={this.state.teammates}/>
            </div>
        )
    }
}