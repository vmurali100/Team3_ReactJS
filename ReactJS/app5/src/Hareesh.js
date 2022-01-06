import { Component } from "react"
import Hareesh1 from "./Hareesh1"

export  default class Hareesh extends Component{
    constructor(){
        super()
        this.state={
            message:"iam from hareesh component",

            person:{
                id:"003",
                fname:"chandu",
                email:"chandu@gmail.com",
                proffession:"front-end developer"
            },
            teammates:["chandu","abi","lokesh","hareesh"]
        }
        
    }
    render(){
        return(
            <div>
                <Hareesh1
                message={this.state.message}
                data={this.state.person}
                array={this.state.teammates}/>
                
            </div>
        )
    }
}