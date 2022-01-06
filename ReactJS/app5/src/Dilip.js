import { Component } from "react";
import Dilip1 from "./Dilip1";

export default class Dilip extends Component{
    constructor(){
        super()
        this.state={
            message:"iam from dilip component",

            user:{
                id:"005",
                fname:"dilip",
                email:"dilip@gmail.com",
                proffession:"front end developer"
            },
            teammates:["chandu","hareesh","dilip"]
        }
    }
    render(){
        return(
            <div>
                <Dilip1
                msg={this.state.message}
                obj={this.state.user}
                array={this.state.teammates}/>
            </div>
        )
    }
}