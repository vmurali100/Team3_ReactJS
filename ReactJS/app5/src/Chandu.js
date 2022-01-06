import { Component } from "react";
import Chandu1 from './Chandu1'
export default class Chandu extends Component{
    constructor(){
        super()

        this.state={
            message:"iam from Chandu component",

            user:{
                id:"004",
                fname:"balaji",
                email:"balaji@gmail.com",
                proffession:"front-end developer"
            },
            teammates:["abi", "Lokesh","Hareesh","balaji","chandu"]
        }
    }
    render(){
        return(
            <div>
                <Chandu1
                message={this.state.message}
                person={this.state.user}
                array={this.state.teammates}/>
             
            </div>
        )
    }
}